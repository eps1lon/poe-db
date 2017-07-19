module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CharacterPanelStatContext',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'character_panel_stat_contexts',
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'CharacterPanelStatContexts.dat';
  return model;
};
