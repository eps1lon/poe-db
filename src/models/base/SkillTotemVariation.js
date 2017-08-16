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
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'skill_totems_key',
            },
          ],
          name: 'index_skill_totems_key',
        },
        {
          fields: [
            {
              attribute: 'monster_varieties_key',
            },
          ],
          name: 'index_monster_varieties_key',
        },
      ],
      tableName: 'skill_totem_variations',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.SkillTotem, {
      as: 'skill_totem',
      $inverse: 'skill_totem_variations',
      $col_order: 0,
      foreignKey: {
        name: 'skill_totems_key',
        $type: 'int',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVariety, {
      as: 'monster_variety',
      $inverse: 'skill_totem_variations',
      $col_order: 2,
      foreignKey: {
        name: 'monster_varieties_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'SkillTotemVariations.dat';
  return model;
};
