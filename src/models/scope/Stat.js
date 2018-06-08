module.exports = () => {
  return {
    // data structure for eps1lon/poe_mod_repository
    'for-mod-repository': {
      attributes: [
        ['row', 'primary'],
        ['row', 'Rows'],
        ['id', 'Id'],
        ['text', 'Text'],
      ],
    },
    // data structure for eps1lon/recraft
    'for-recraft': {
      attributes: [['row', 'primary'], 'id'],
    },
  };
};
