module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'InvasionMonsterRestriction',
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
      data0: {
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
          fields: [
            {
              attribute: 'world_areas_key',
            },
          ],
        },
      ],
      tableName: 'invasion_monster_restrictions',
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
    model.belongsToMany(models.MonsterVariety, {
      as: 'monster_varieties',
      through: 'InvasionMonsterRestrictionMonsterVariety',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'InvasionMonsterRestrictions.dat';
  return model;
};
