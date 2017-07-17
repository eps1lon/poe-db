module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'PathOfEnduranceHabtmMod',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'path_of_endurance_habtm_mods',
    },
  );

  model.associate = models => {
    model.belongsTo(models.PathOfEndurance, {
      foreignKey: 'path_of_endurance_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      foreignKey: 'mod_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
