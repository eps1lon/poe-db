const _ = require('lodash');

const { findIndex } = require('../util');
const ACTIONS = require('./actions');
const invertAction = require('./invertAction');

const newIndices = (prev_schema, schema) => {
  return Object.entries(schema).map(([name, model]) => {
    return [
      model,
      model.indices.filter(index => {
        if (prev_schema[name] === undefined) {
          // schema is new so the index must be new
          return true;
        } else {
          return findIndex(prev_schema[name].indices, index) === undefined;
        }
      }),
    ];
  });
};

class MigrationAst {
  constructor(prev_schema, schema) {
    this.prev_schema = prev_schema;
    this.schema = schema;
  }

  up() {
    return [
      ...this.createTable(),
      ...this.addIndex(),
      ...this.changeColumn(),
      // drop possible key constraints before dropping tables
      ...this.dropIndex(),
      ...this.dropTable(),
    ];
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
      .map(([, model]) => {
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
    return _.flatten(
      newIndices(this.prev_schema, this.schema).map(([model, indices]) => {
        return indices.map(index => {
          return {
            type: ACTIONS.ADD_INDEX,
            tableName: model.tableName,
            attributes: index.fields,
            indexName: index.name,
          };
        });
      }),
    );
  }

  dropIndex() {
    return _.flatten(
      newIndices(this.schema, this.prev_schema).map(([model, indices]) => {
        return indices.map(index => {
          return {
            type: ACTIONS.REMOVE_INDEX,
            tableName: model.tableName,
            attributes: index.fields,
            indexName: index.name,
          };
        });
      }),
    );
  }

  changeColumn() {
    return []; // TODO
  }
}

module.exports = MigrationAst;
