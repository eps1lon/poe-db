const t = require('babel-types');
const _ = require('lodash');

const actionToStatement = require('./actionToStatement');

const QUERY_INTERFACE = t.identifier('queryInterface');
const SEQUELIZE = t.identifier('Sequelize');

const promiseAllCall = promise_expressions => {
  return t.callExpression(
    t.memberExpression(t.identifier('Promise'), t.identifier('all')),
    [t.arrayExpression(promise_expressions)],
  );
};

const chunkAwaitPromiseCalls = (promise_calls, size) => {
  return _.chunk(promise_calls, size).map(chunk => {
    return t.expressionStatement(
      t.awaitExpression(
        promiseAllCall(chunk.map(({ expression }) => expression)),
      ),
    );
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
      chunkAwaitPromiseCalls(this.migration.up().map(actionToStatement), 500),
    );
  }

  down() {
    return this.skeletonMethodExpression(
      chunkAwaitPromiseCalls(this.migration.down().map(actionToStatement), 500),
    );
  }
}

module.exports = MigrationAst;
