const t = require('babel-types');

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
          [t.stringLiteral(this.model.name()), this.attributes()],
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
        t.objectProperty(
          t.identifier('type'),
          t.memberExpression(
            t.identifier('DataTypes'),
            t.identifier(attribute.type),
          ),
        ),
      ]),
    );
  }

  belongsToStatements() {
    return [];
  }

  belongsToManyStatements() {
    return [];
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
