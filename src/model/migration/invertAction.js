const ACTIONS = require('./actions');

const invertAction = action => {
  switch (action.type) {
    case ACTIONS.CREATE_TABLE:
      return Object.assign({}, action, { type: ACTIONS.DROP_TABLE });
    case ACTIONS.DROP_TABLE:
      return Object.assign({}, action, { type: ACTIONS.CREATE_TABLE });
    case ACTIONS.ADD_INDEX:
      return Object.assign({}, action, { type: ACTIONS.REMOVE_INDEX });
    case ACTIONS.REMOVE_INDEX:
      return Object.assign({}, action, { type: ACTIONS.ADD_INDEX });
    case ACTIONS.CHANGE_COLUMN:
      return Object.assign({}, action, {
        before: action.after,
        after: action.before,
      });
    case ACTIONS.ADD_COLUMN:
      return Object.assign({}, action, { type: ACTIONS.REMOVE_COLUMN });
    case ACTIONS.REMOVE_COLUMN:
      return Object.assign({}, action, { type: ACTIONS.ADD_COLUMN });
    default:
      throw new Error(`unrecognized type ${action.type}`);
  }
};

module.exports = invertAction;
