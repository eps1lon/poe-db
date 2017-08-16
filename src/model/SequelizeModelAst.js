const t = require('babel-types');
const _ = require('lodash');

const { removeProp } = require('../util');

const objToAst = obj => {
  if (t.isMemberExpression(obj)) {
    return obj;
  } else if (obj === null) {
    return t.nullLiteral();
  } else if (obj === undefined) {
    return t.identifier('undefined'); // TODO undefinedLiteral?
  } else if (typeof obj === 'string') {
    return t.stringLiteral(obj);
  } else if (typeof obj === 'boolean') {
    return t.booleanLiteral(obj);
  } else if (Array.isArray(obj)) {
    return t.arrayExpression(obj.map(objToAst));
  } else if (typeof obj === 'object') {
    const properties = Object.getOwnPropertyNames(obj).map(prop => {
      return t.objectProperty(t.stringLiteral(prop), objToAst(obj[prop]));
    });

    return t.objectExpression(properties);
  } else if (!isNaN(obj)) {
    return t.numericLiteral(obj);
  } else {
    throw Error(`unrecognized type ${typeof obj}`, obj);
  }
};

const default_constructor_options = {
  // useful for intermediate through models
  skip_has_many: true,
  // through model exists in sequelize.models
  // otherwise use string value to let sequelize auto generate it
  through_models_defined: false,
};

class SequelizeModelAst {
  constructor(model, options = {}) {
    this.model = model;
    this.options = Object.assign(default_constructor_options, options);
  }

  ast() {
    return t.program(this.body());
  }

  body() {
    const requires = [...this.staticRequires()].map(path =>
      this.buildRequire(path, path),
    );

    return [...requires, this.exports()];
  }

  exports() {
    return t.expressionStatement(
      t.assignmentExpression(
        '=',
        t.memberExpression(t.identifier('module'), t.identifier('exports')),
        t.arrowFunctionExpression(
          [t.identifier('sequelize'), t.identifier('DataTypes')],
          this.exportBody(),
        ),
      ),
    );
  }

  exportBody() {
    return t.blockStatement([
      this.modelDefinition(),
      this.associate(),
      this.datFileGetter(),
      t.returnStatement(t.identifier('model')),
    ]);
  }

  modelDefinition() {
    return t.variableDeclaration('const', [
      t.variableDeclarator(
        t.identifier('model'),
        t.callExpression(
          t.memberExpression(t.identifier('sequelize'), t.identifier('define')),
          [
            t.stringLiteral(this.model.name()),
            this.attributes(),
            this.defineOptions(),
          ],
        ),
      ),
    ]);
  }

  attributes() {
    return t.objectExpression(
      Object.entries(this.model.attributes()).map(([name, attribute]) => {
        return this.attributeExpression(name, attribute);
      }),
    );
  }

  attributeExpression(name, attribute) {
    return t.objectProperty(
      t.identifier(name),
      t.objectExpression([
        // serialized type is an identifier, objToAst cant deserialize identifiers
        t.objectProperty(
          t.identifier('type'),
          t.memberExpression(
            t.identifier('DataTypes'),
            t.identifier(attribute.type),
          ),
        ),
        ...objToAst(removeProp(attribute, 'type')).properties,
      ]),
    );
  }

  defineOptions() {
    return objToAst(this.model.options());
  }

  associate() {
    const models = t.identifier('models');

    return t.expressionStatement(
      t.assignmentExpression(
        '=',
        t.memberExpression(t.identifier('model'), t.identifier('associate')),
        t.arrowFunctionExpression(
          [models],
          t.blockStatement([
            ...this.belongsToStatements(models),
            ...this.belongsToManyStatements(models),
          ]),
        ),
      ),
    );
  }

  belongsToStatements(models) {
    return _.flatten(
      this.model.belongsTo().map(([assoc_name, props]) => {
        const source = t.identifier('model');
        const target = t.memberExpression(models, t.identifier(assoc_name));

        const belongs_to_statment = t.expressionStatement(
          t.callExpression(
            t.memberExpression(source, t.identifier('belongsTo')),
            [
              target,
              // make them nullable for circular references
              objToAst(
                Object.assign({}, props, {
                  nullable: true,
                  constraints: false,
                }),
              ),
            ],
          ),
        );

        let has_many_statement = t.expressionStatement(
          t.callExpression(
            t.memberExpression(target, t.identifier('hasMany')),
            [
              source,
              // make them nullable for circular references
              objToAst(
                Object.assign({}, props, {
                  nullable: true,
                  constraints: false,
                  as: props.$inverse,
                  // swap source target
                  targetKey: undefined,
                  sourceKey: props.targetKey,
                }),
              ),
            ],
          ),
        );

        if (this.options.skip_has_many) {
          has_many_statement = null;
        }

        // remove empty expressions
        return [belongs_to_statment, has_many_statement].filter(Boolean);
      }),
    );
  }

  belongsToManyStatements(models) {
    return this.model.belongsToMany().map(([assoc_name, props]) => {
      return t.expressionStatement(
        t.callExpression(
          t.memberExpression(
            t.identifier('model'),
            t.identifier('belongsToMany'),
          ),
          [
            t.memberExpression(models, t.identifier(assoc_name)),
            // make them nullable for circular references
            objToAst(
              Object.assign({}, props, {
                nullable: true,
                constraints: false,
                through: Object.assign({}, props.through, {
                  model: this._throughProperty(props.through.model),
                }),
              }),
            ),
          ],
        ),
      );
    });
  }

  staticRequires() {
    return [];
  }

  buildRequire(identifier, path) {
    return t.variableDeclaration('const', [
      t.variableDeclarator(
        t.identifier(identifier),
        t.callExpression(t.identifier('require'), [t.stringLiteral(path)]),
      ),
    ]);
  }

  datFileGetter() {
    return t.expressionStatement(
      t.assignmentExpression(
        '=',
        t.memberExpression(t.identifier('model'), t.identifier('DAT_FILE')),
        t.stringLiteral(this.model.dat_file),
      ),
    );
  }

  _throughProperty(prop) {
    if (this.options.through_models_defined) {
      return t.memberExpression(t.identifier('models'), t.identifier(prop));
    } else {
      return t.stringLiteral(prop);
    }
  }
}

module.exports = SequelizeModelAst;
