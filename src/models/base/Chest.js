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
        allowNull: false,
        $col_order: 0,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      a_o_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      flag2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      unknown4: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      flag3: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      flag4: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      unknown5: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 10,
      },
      unknown__keys: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
      },
      unknown__values: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 12,
      },
      flag5: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 14,
      },
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 18,
      },
      unknown19: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 19,
      },
      max_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 20,
      },
      key4: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 24,
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
              attribute: 'chest_effects_key',
            },
          ],
          name: 'index_chest_effects_key',
        },
        {
          fields: [
            {
              attribute: 'corrupt__achievement_items_key',
            },
          ],
          name: 'index_corrupt__achievement_items_key',
        },
        {
          fields: [
            {
              attribute: 'currency_use__achievement_items_key',
            },
          ],
          name: 'index_currency_use__achievement_items_key',
        },
        {
          fields: [
            {
              attribute: 'encounter__achievement_items_key',
            },
          ],
          name: 'index_encounter__achievement_items_key',
        },
      ],
      tableName: 'chests',
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
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'corrupt__achievement_item',
      $inverse: 'chests',
      $col_order: 21,
      foreignKey: {
        name: 'corrupt__achievement_items_key',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'currency_use__achievement_item',
      $inverse: 'chests',
      $col_order: 22,
      foreignKey: {
        name: 'currency_use__achievement_items_key',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'encounter__achievement_item',
      $inverse: 'chests',
      $col_order: 23,
      foreignKey: {
        name: 'encounter__achievement_items_key',
        $type: 'ref|list|ulong',
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
