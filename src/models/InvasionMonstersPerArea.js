module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'InvasionMonstersPerArea',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      data0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      unknown4: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
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
      ],
      tableName: 'invasion_monsters_per_areas',
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldArea, {
      foreignKey: {
        name: 'world_areas_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVariety, {
      as: 'monster_varieties1',
      through: models.InvasionMonstersPerAreaHabtmMonsterVarieties1,
      foreignKey: 'invasion_monsters_per_area_row',
      otherKey: 'monster_variety_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVariety, {
      as: 'monster_varieties2',
      through: models.InvasionMonstersPerAreaHabtmMonsterVarieties2,
      foreignKey: 'invasion_monsters_per_area_row',
      otherKey: 'monster_variety_row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'InvasionMonstersPerArea.dat';
  return model;
};
