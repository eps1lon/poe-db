const ACTIONS = require('./actions');
const invertAction = require('./invertAction');

class MigrationAst {
  constructor(prev_schema, schema) {
    this.prev_schema = prev_schema;
    this.schema = schema;
  }

  up() {
    return [...this.createTable(), ...this.addIndex(), ...this.changeColumn()];
  }

  down() {
    return this.up().reverse().map(invertAction);
  }

  createTable() {
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

  dropTable() {
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

  addIndex() {
    return []; //  TODO
  }

  changeColumn() {
    return []; // TODO
  }
}

module.exports = MigrationAst;
