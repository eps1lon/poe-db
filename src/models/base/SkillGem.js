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
        allowNull: true,
        $col_order: 2,
      },
      dex: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      int: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      _gem_tags_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 5,
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
              attribute: 'vaal_variant_base_item_types_key',
            },
          ],
          name: 'index_vaal_variant_base_item_types_key',
        },
      ],
      tableName: 'skill_gems',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemType, {
      as: 'base_item_type',
      $inverse: 'skill_gems',
      $col_order: 0,
      foreignKey: {
        name: 'base_item_types_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.GrantedEffect, {
      as: 'granted_effect',
      $inverse: 'skill_gems',
      $col_order: 1,
      foreignKey: {
        name: 'granted_effects_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BaseItemType, {
      as: 'vaal_variant_base_item_type',
      $inverse: 'skill_gems',
      $col_order: 6,
      foreignKey: {
        name: 'vaal_variant_base_item_types_key',
        $type: 'long',
        $col_order: 6,
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
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'SkillGems.dat';
  return model;
};
