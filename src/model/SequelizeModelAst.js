const t = require('babel-types');
const { removeProp } = require('../util');

const objToAst = obj => {
  if (obj === null) {
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

class SequelizeModelAst {
  constructor(model) {
    this.model = model;
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
    return t.objectExpression([
      t.objectProperty(
        t.identifier('classMethods'),
        t.objectExpression([
          t.objectProperty(t.identifier('associate'), this.associate()),
        ]),
      ),
    ]);
  }

  associate() {
    const models = t.identifier('models');

    return t.arrowFunctionExpression(
      [models],
      t.blockStatement([
        ...this.belongsToStatements(models),
        ...this.belongsToManyStatements(models),
      ]),
    );
  }

  belongsToStatements(models) {
    return this.model.belongsTo().map(([assoc_name, props]) => {
      return t.expressionStatement(
        t.callExpression(
          t.memberExpression(t.identifier('model'), t.identifier('belongsTo')),
          [
            t.memberExpression(models, t.identifier(assoc_name)),
            // make them nullable for circular references
            objToAst(Object.assign({}, props, { nullable: true })),
          ],
        ),
      );
    });
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
            objToAst(Object.assign({}, props, { nullable: true })),
          ],
        ),
      );
    });
  }

  staticRequires() {
    return ['path', 'sequelize'];
  }

  buildRequire(identifier, path) {
    return t.variableDeclaration('const', [
      t.variableDeclarator(
        t.identifier(identifier),
        t.callExpression(t.identifier('require'), [t.stringLiteral(path)]),
      ),
    ]);
  }

  buildSequelizeImport(model) {}

  buildAttribute(attr) {}
}

module.exports = SequelizeModelAst;
