module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DescentExile',
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
      unknown7: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'world_areas_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'characters_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'monster_varieties_key',
            },
          ],
        },
      ],
      tableName: 'descent_exiles',
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldArea, {
      foreignKey: {
        name: 'world_areas_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.WorldArea.hasMany(model, {
      foreignKey: {
        name: 'world_areas_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Character, {
      foreignKey: {
        name: 'characters_key',
        $col_order: 2,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Character.hasMany(model, {
      foreignKey: {
        name: 'characters_key',
        $col_order: 2,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.MonsterVariety, {
      foreignKey: {
        name: 'monster_varieties_key',
        $col_order: 3,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.MonsterVariety.hasMany(model, {
      foreignKey: {
        name: 'monster_varieties_key',
        $col_order: 3,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'DescentExiles.dat';
  return model;
};
