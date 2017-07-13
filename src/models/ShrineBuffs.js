module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ShrineBuffs',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      buff_stat_values: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {
    model.belongsTo(models.BuffDefinitions, {
      foreignKey: {
        name: 'buff_definitions_key',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.BuffDefinitions.hasMany(model, {
      foreignKey: {
        name: 'buff_definitions_key',
        $col_order: 2,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'ShrineBuffs.dat';
  return model;
};
