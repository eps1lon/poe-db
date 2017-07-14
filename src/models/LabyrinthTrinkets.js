module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthTrinkets',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      buff_values: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['base_item_types_key'],
        },
        {
          fields: ['labyrinth_secrets_key'],
        },
        {
          fields: ['buff_buff_definitions_key'],
        },
      ],
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemTypes, {
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.BaseItemTypes.hasMany(model, {
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 0,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.LabyrinthSecrets, {
      foreignKey: {
        name: 'labyrinth_secrets_key',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.LabyrinthSecrets.hasMany(model, {
      foreignKey: {
        name: 'labyrinth_secrets_key',
        $col_order: 1,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.BuffDefinitions, {
      foreignKey: {
        name: 'buff_buff_definitions_key',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.BuffDefinitions.hasMany(model, {
      foreignKey: {
        name: 'buff_buff_definitions_key',
        $col_order: 2,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'LabyrinthTrinkets.dat';
  return model;
};
