const t = require('babel-types');

const ACTIONS = require('./migration/actions');
const invertAction = require('./migration/invertAction');
const actionToStatement = require('./migration/actionToStatement');

const QUERY_INTERFACE = t.identifier('queryInterface');
const SEQUELIZE = t.identifier('Sequelize');

class MigrationAst {
  constructor(prev_schema, schema) {
    this.prev_schema = prev_schema;
    this.schema = schema;
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
      this.upActions().map(actionToStatement),
    );
  }

  upActions() {
    return [
      ...this.createTableActions(),
      ...this.addIndexActions(),
      ...this.changeColumnActions(),
    ];
  }

  down() {
    return this.skeletonMethodExpression(
      this.upActions().map(invertAction).map(actionToStatement),
    );
  }

  downActions() {
    return this.upActions().reverse();
  }

  createTableActions() {
    return Object.entries(this.schema)
      .filter(([name]) => this.prev_schema[name] === undefined)
      .map(([, model]) => {
        return {
          type: ACTIONS.CREATE_TABLE,
          name: model.tableName,
          attributes: model.attributes,
          options: model.options,
        };
      });
  }

  dropTableActions() {
    return Object.entries(this.prev_schema)
      .filter(([name]) => this.schema[name] === undefined)
      .map(([model]) => {
        // add arguments for createTable in order to be able to invert the action
        return {
          type: ACTIONS.DROP_TABLE,
          name: model.tableName,
          attributes: model.attributes,
          options: model.options,
        };
      });
  }

  addIndexActions() {
    return []; //  TODO
  }

  changeColumnActions() {
    return []; // TODO
  }
}

module.exports = MigrationAst;
