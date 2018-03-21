module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ItemVisualIdentity',
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
      dds_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      ao_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      unknown_unique_int: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      ao_file2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      marauder_sm_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      ranger_sm_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      witch_sm_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      duelist_dex_sm_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      templar_sm_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      shadow_sm_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      scion_sm_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      marauder_shape: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
      },
      ranger_shape: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 14,
      },
      witch_shape: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 15,
      },
      duelist_shape: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 16,
      },
      templar_shape: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 17,
      },
      shadow_shape: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 18,
      },
      scion_shape: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 19,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 20,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 21,
      },
      sm_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 23,
      },
      epk_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 25,
      },
      is_alternate_art: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 27,
      },
      flag2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 28,
      },
      animation_location: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 30,
      },
      _pickup_achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 22,
      },
      _identify_achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 24,
      },
      _corrupt_achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 26,
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
              attribute: 'sound_effects_key',
            },
          ],
          name: 'index_sound_effects_key',
        },
        {
          fields: [
            {
              attribute: 'create_corrupted_jewel_achievement_items_key',
            },
          ],
          name: 'index_create_corrupted_jewel_achievement_items_key',
        },
      ],
      tableName: 'item_visual_identities',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.SoundEffect, {
      as: 'sound_effect',
      $inverse: 'item_visual_identities',
      $col_order: 3,
      foreignKey: {
        name: 'sound_effects_key',
        $type: 'ulong',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'create_corrupted_jewel_achievement_item',
      $inverse: 'item_visual_identities',
      $col_order: 29,
      foreignKey: {
        name: 'create_corrupted_jewel_achievement_items_key',
        $type: 'ulong',
        $col_order: 29,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'pickup_achievement_items',
      through: {
        model: models.ItemVisualIdentityHabtmPickupAchievementitem,
        unique: false,
      },
      foreignKey: 'item_visual_identity_row',
      otherKey: 'achievement_item_row',
      $col_order: 22,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'identify_achievement_items',
      through: {
        model: models.ItemVisualIdentityHabtmIdentifyAchievementitem,
        unique: false,
      },
      foreignKey: 'item_visual_identity_row',
      otherKey: 'achievement_item_row',
      $col_order: 24,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'corrupt_achievement_items',
      through: {
        model: models.ItemVisualIdentityHabtmCorruptAchievementitem,
        unique: false,
      },
      foreignKey: 'item_visual_identity_row',
      otherKey: 'achievement_item_row',
      $col_order: 26,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ItemVisualIdentity.dat';
  return model;
};
