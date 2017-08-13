const t = require('babel-types');

const actionToStatement = require('./actionToStatement');

const QUERY_INTERFACE = t.identifier('queryInterface');
const SEQUELIZE = t.identifier('Sequelize');

class MigrationAst {
  constructor(migration) {
    this.migration = migration;
  }

  ast() {
    return t.program(this.body());
  }

  body() {
    return [this.exports()];
  }

  exports() {
    return t.expressionStatement(
      t.assignmentExpression(
        '=',
        t.memberExpression(t.identifier('module'), t.identifier('exports')),
        t.objectExpression([
          t.objectProperty(t.identifier('up'), this.up()),
          t.objectProperty(t.identifier('down'), this.down()),
        ]),
      ),
    );
  }

  skeletonMethodExpression(body) {
    return t.arrowFunctionExpression(
      [QUERY_INTERFACE, SEQUELIZE],
      t.blockStatement(body),
    );
  }

  up() {
    return this.skeletonMethodExpression(
      this.migration.up().map(actionToStatement),
    );
  }

  down() {
    return this.skeletonMethodExpression(
      this.migration.down().map(actionToStatement),
    );
  }
}

module.exports = MigrationAst;
