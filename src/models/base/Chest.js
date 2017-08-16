module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Chest',
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
        allowNull: true,
        $col_order: 0,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      ao_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      flag2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      unknown4: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      flag3: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      flag4: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      unknown5: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      unknown_keys: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      unknown_values: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      flag5: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 14,
      },
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 18,
      },
      unknown19: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 19,
      },
      max_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 20,
      },
      key4: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 24,
      },
      _mods_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 15,
      },
      _tags_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 16,
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
              attribute: 'chest_effects_key',
            },
          ],
          name: 'index_chest_effects_key',
        },
        {
          fields: [
            {
              attribute: 'corrupt_achievement_items_key',
            },
          ],
          name: 'index_corrupt_achievement_items_key',
        },
        {
          fields: [
            {
              attribute: 'currency_use_achievement_items_key',
            },
          ],
          name: 'index_currency_use_achievement_items_key',
        },
        {
          fields: [
            {
              attribute: 'encounter_achievement_items_key',
            },
          ],
          name: 'index_encounter_achievement_items_key',
        },
      ],
      tableName: 'chests',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemType, {
      as: 'base_item_type',
      $inverse: 'chests',
      $col_order: 13,
      foreignKey: {
        name: 'base_item_types_key',
        $type: 'ulong',
        $col_order: 13,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ChestEffect, {
      as: 'chest_effect',
      $inverse: 'chests',
      $col_order: 17,
      foreignKey: {
        name: 'chest_effects_key',
        $type: 'ulong',
        $col_order: 17,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'corrupt_achievement_item',
      $inverse: 'chests',
      $col_order: 21,
      foreignKey: {
        name: 'corrupt_achievement_items_key',
        $type: 'ulong',
        $col_order: 21,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'currency_use_achievement_item',
      $inverse: 'chests',
      $col_order: 22,
      foreignKey: {
        name: 'currency_use_achievement_items_key',
        $type: 'ulong',
        $col_order: 22,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'encounter_achievement_item',
      $inverse: 'chests',
      $col_order: 23,
      foreignKey: {
        name: 'encounter_achievement_items_key',
        $type: 'ref|list|ulong',
        $col_order: 23,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'mods',
      through: {
        model: models.ChestHabtmMod,
        unique: false,
      },
      foreignKey: 'chest_row',
      otherKey: 'mod_row',
      $col_order: 15,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'tags',
      through: {
        model: models.ChestHabtmTag,
        unique: false,
      },
      foreignKey: 'chest_row',
      otherKey: 'tag_row',
      $col_order: 16,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Chests.dat';
  return model;
};
