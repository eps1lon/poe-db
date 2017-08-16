const t = require('babel-types');
const _ = require('lodash');

const ACTIONS = require('./actions');

const QUERY_INTERFACE = t.identifier('queryInterface');
const SEQUELIZE = t.identifier('Sequelize');

const objToAst = obj => {
  if (t.isExpression(obj)) {
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

const functionStatement = (name, args) => {
  return t.expressionStatement(
    t.callExpression(
      t.memberExpression(QUERY_INTERFACE, t.identifier(name)),
      args,
    ),
  );
};

const dataTypeProperty = type => {
  const typeExpression = t.memberExpression(
    SEQUELIZE,
    t.identifier(type.constructor),
  );

  if (type.options && Object.keys(type.options).length > 0) {
    return t.callExpression(typeExpression, [objToAst(type.options)]);
  } else {
    return typeExpression;
  }
};

const createStatement = action => {
  return functionStatement('createTable', [
    t.stringLiteral(action.name),
    objToAst(
      _.mapValues(action.attributes, attribute => {
        return Object.assign({}, attribute, {
          type: dataTypeProperty(attribute.type),
        });
      }),
    ),
    objToAst(action.options),
  ]);
};

const dropStatement = action => {
  return functionStatement('dropTable', [t.stringLiteral(action.name)]);
};

const addIndex = ({ tableName, attributes, indexName }) => {
  return functionStatement(
    'addIndex',
    [tableName, attributes, { indexName }].map(objToAst),
  );
};

const removeIndex = ({ tableName, attributes }) => {
  return functionStatement(
    'removeIndex',
    [tableName, attributes].map(objToAst),
  );
};

const actionToStatement = action => {
  switch (action.type) {
    case ACTIONS.CREATE_TABLE:
      return createStatement(action);
    case ACTIONS.DROP_TABLE:
      return dropStatement(action);
    case ACTIONS.ADD_INDEX:
      return addIndex(action);
    case ACTIONS.REMOVE_INDEX:
      return removeIndex(action);
    default:
      throw new Error(`unrecognized type ${action.type}`);
  }
};

module.exports = actionToStatement;
