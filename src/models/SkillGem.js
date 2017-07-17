module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'SkillGem',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      str: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      dex: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      int: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
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
              attribute: 'base_item_types_key',
            },
          ],
          name: 'index_base_item_types_key',
        },
        {
          fields: [
            {
              attribute: 'granted_effects_key',
            },
          ],
          name: 'index_granted_effects_key',
        },
        {
          fields: [
            {
              attribute: 'vaal_variant__base_item_types_key',
            },
          ],
          name: 'index_vaal_variant__base_item_types_key',
        },
      ],
      tableName: 'skill_gems',
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemType, {
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.GrantedEffect, {
      foreignKey: {
        name: 'granted_effects_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BaseItemType, {
      foreignKey: {
        name: 'vaal_variant__base_item_types_key',
        $col_order: 6,
        $type: 'long',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.GemTag, {
      as: 'gem_tags',
      through: {
        model: models.SkillGemHabtmGemTag,
        unique: false,
      },
      foreignKey: 'skill_gem_row',
      otherKey: 'gem_tag_row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'SkillGems.dat';
  return model;
};
