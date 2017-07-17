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
        allowNull: false,
        $col_order: 0,
      },
      d_d_s_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      a_o_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      unknown_unique_int: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      a_o_file2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      marauder_s_m_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      ranger_s_m_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      witch_s_m_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      duelist_dex_s_m_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      templar_s_m_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 10,
      },
      shadow_s_m_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
      },
      scion_s_m_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 12,
      },
      marauder_shape: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 13,
      },
      ranger_shape: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 14,
      },
      witch_shape: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 15,
      },
      duelist_shape: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 16,
      },
      templar_shape: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 17,
      },
      shadow_shape: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 18,
      },
      scion_shape: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 19,
      },
      unknown28: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 20,
      },
      unknown29: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 21,
      },
      s_m_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 23,
      },
      e_p_k_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 25,
      },
      is_alternate_art: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 27,
      },
      flag2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 28,
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
              attribute: 'sound_effects_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'create_corrupted_jewel_achievement_items_key',
            },
          ],
        },
      ],
      tableName: 'item_visual_identities',
    },
  );

  model.associate = models => {
    model.belongsTo(models.SoundEffect, {
      foreignKey: {
        name: 'sound_effects_key',
        $col_order: 3,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      foreignKey: {
        name: 'create_corrupted_jewel_achievement_items_key',
        $col_order: 29,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'pickup__achievement_items',
      through: models.ItemVisualIdentityHabtmPickupAchievementitem,
      foreignKey: 'item_visual_identity_row',
      otherKey: 'achievement_item_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'identify__achievement_items',
      through: models.ItemVisualIdentityHabtmIdentifyAchievementitem,
      foreignKey: 'item_visual_identity_row',
      otherKey: 'achievement_item_row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'corrupt__achievement_items',
      through: models.ItemVisualIdentityHabtmCorruptAchievementitem,
      foreignKey: 'item_visual_identity_row',
      otherKey: 'achievement_item_row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ItemVisualIdentity.dat';
  return model;
};
