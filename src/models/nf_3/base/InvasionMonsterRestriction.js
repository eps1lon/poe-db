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
          name: 'index_world_areas_key',
        },
      ],
      tableName: 'invasion_monster_restrictions',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldArea, {
      as: 'world_area',
      $inverse: 'invasion_monster_restrictions',
      $col_order: 1,
      foreignKey: {
        name: 'world_areas_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MonsterVariety, {
      as: 'monster_varieties',
      through: {
        model: models.InvasionMonsterRestrictionHabtmMonsterVariety,
        unique: false,
      },
      foreignKey: 'invasion_monster_restriction_row',
      otherKey: 'monster_variety_row',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'InvasionMonsterRestrictions.dat';
  return model;
};
