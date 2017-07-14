module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'SkillTotemVariation',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      totem_skin_id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
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
              attribute: 'skill_totems_key',
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
      tableName: 'skill_totem_variations',
    },
  );

  model.associate = models => {
    model.belongsTo(models.SkillTotem, {
      foreignKey: {
        name: 'skill_totems_key',
        $col_order: 0,
        $type: 'int',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.SkillTotem.hasMany(model, {
      foreignKey: {
        name: 'skill_totems_key',
        $col_order: 0,
        $type: 'int',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.MonsterVariety, {
      foreignKey: {
        name: 'monster_varieties_key',
        $col_order: 2,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.MonsterVariety.hasMany(model, {
      foreignKey: {
        name: 'monster_varieties_key',
        $col_order: 2,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'SkillTotemVariations.dat';
  return model;
};
