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

const intersectObjectByKeys = (prev, cur) => {
  return _.pickBy(cur, (value, key) => prev[key] !== undefined);
};

const diffObjectByKeys = (prev, cur) => {
  return _.pickBy(cur, (value, key) => prev[key] === undefined);
};

const diffAttribute = (prev, cur) => {
  // simple diff on primitives
  const changes = Object.entries(cur)
    .filter(([key, value]) => {
      return (
        !_.isObject(value) && !_.isObject(prev[key]) && value !== prev[key]
      );
    })
    .map(([key]) => key);

  return _.pick(cur, changes);
};

/**
 * 
 * @param {Object} prev attribute
 * @param {Object} cur attribute
 * @return {Boolean} if prev !== cur in a sense of an attribute
 */
const isDiffAttr = (prev, cur) => {
  return (
    prev !== undefined && Object.values(diffAttribute(prev, cur)).length > 0
  );
};

const changedColumns = (prev_schema, schema) => {
  const common_schemas = intersectObjectByKeys(prev_schema, schema);

  return _.flatten(
    Object.entries(common_schemas).map(([model_name, model]) => {
      const prev_attributes = prev_schema[model_name].attributes;

      // keep hole attribute defintion because sequelize needs it
      // http://docs.sequelizejs.com/manual/tutorial/migrations.html#changeColumn
      const attribute_changes = Object.entries(
        model.attributes,
      ).filter(([attribute_name, attribute]) =>
        isDiffAttr(prev_attributes[attribute_name], attribute),
      );

      // normalize
      return Array(attribute_changes.length)
        .fill(0)
        .map((_, i) => {
          return {
            model_name,
            attribute_name: attribute_changes[i][0],
            attribute: attribute_changes[i][1],
          };
        });
    }),
  );
};

const newColumns = (prev_schema, schema) => {
  return _.flatten(
    Object.entries(
      intersectObjectByKeys(prev_schema, schema),
    ).map(([model_name, model]) => {
      const prev_model = prev_schema[model_name];

      const new_attributes = Object.entries(
        diffObjectByKeys(prev_model.attributes, model.attributes),
      );

      // normalize
      return Array(new_attributes.length)
        .fill(0)
        .map((_, i) => {
          return {
            model_name,
            attribute_name: new_attributes[i][0],
            attribute: new_attributes[i][1],
          };
        });
    }),
  );
};

class MigrationAst {
  constructor(prev_schema, schema) {
    this.prev_schema = prev_schema;
    this.schema = schema;
  }

  up() {
    return [
      ...this.createTable(),
      // drop possible key constraints before dropping tables
      ...this.dropIndex(),
      ...this.columnChanges(),
      ...this.addIndex(),
      ...this.dropTable(),
    ];
  }

  down() {
    return this.up()
      .reverse()
      .map(invertAction);
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

  columnChanges() {
    const type_order = [
      ACTIONS.REMOVE_COLUMN,
      ACTIONS.ADD_COLUMN,
      ACTIONS.CHANGE_COLUMN,
    ];

    return [
      ...this.addColumn(),
      ...this.removeColumn(),
      ...this.changeColumn(),
    ].sort((a, b) => {
      // order by tableName, (REMOVED, ADDED), indexName
      if (a.tableName === b.tableName) {
        if (a.type === b.type) {
          return a.attributeName.localeCompare(b.attributeName);
        } else {
          return type_order.indexOf(a.type) - type_order.indexOf(b.type);
        }
      } else {
        return a.tableName.localeCompare(b.tableName);
      }
    });
  }

  addColumn() {
    return newColumns(
      this.prev_schema,
      this.schema,
    ).map(({ model_name, attribute_name, attribute }) => {
      return {
        type: ACTIONS.ADD_COLUMN,
        tableName: this.schema[model_name].tableName,
        attributeName: attribute_name,
        options: attribute,
      };
    });
  }

  removeColumn() {
    return newColumns(
      this.schema,
      this.prev_schema,
    ).map(({ model_name, attribute_name, attribute }) => {
      return {
        type: ACTIONS.REMOVE_COLUMN,
        tableName: this.prev_schema[model_name].tableName,
        attributeName: attribute_name,
        options: attribute,
      };
    });
  }

  changeColumn() {
    return changedColumns(
      this.prev_schema,
      this.schema,
    ).map(({ model_name, attribute_name, attribute }) => {
      return {
        type: ACTIONS.CHANGE_COLUMN,
        tableName: this.schema[model_name].tableName,
        attributeName: attribute_name,
        after: attribute,
        before: this.prev_schema[model_name].attributes[attribute_name],
      };
    });
  }
}

module.exports = MigrationAst;
