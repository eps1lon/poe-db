const t = require('babel-types');
const _ = require('lodash');

const actionToStatement = require('./actionToStatement');

const QUERY_INTERFACE = t.identifier('queryInterface');
const SEQUELIZE = t.identifier('Sequelize');

const awaitEach = promise_calls => {
  return promise_calls.map(({ expression }) => {
    return t.expressionStatement(t.awaitExpression(expression));
  });
};

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
      true, // async
    );
  }

  up() {
    // await chunks or migrations like 3.0.0.c-v002 get timed out
    return this.skeletonMethodExpression(
      awaitEach(this.migration.up().map(actionToStatement)),
    );
  }

  down() {
    return this.skeletonMethodExpression(
      awaitEach(this.migration.down().map(actionToStatement)),
    );
  }
}

module.exports = MigrationAst;
