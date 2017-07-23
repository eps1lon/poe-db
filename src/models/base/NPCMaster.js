module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'NPCMaster',
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
      is_str_master: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      is_dex_master: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      is_int_master: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      hideout: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      keys0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      unknown7: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      key2: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 14,
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
              attribute: 'n_p_cs_key',
              length: 250,
            },
          ],
          name: 'index_n_p_cs_key',
        },
        {
          fields: [
            {
              attribute: 'signature_mod__mods_key',
            },
          ],
          name: 'index_signature_mod__mods_key',
        },
        {
          fields: [
            {
              attribute: 'achievement_items_key',
            },
          ],
          name: 'index_achievement_items_key',
        },
        {
          fields: [
            {
              attribute: 'talisman__achievement_items_key',
            },
          ],
          name: 'index_talisman__achievement_items_key',
        },
      ],
      tableName: 'n_p_c_masters',
    },
  );

  model.associate = models => {
    model.belongsTo(models.NPC, {
      as: 'n_p_c',
      $inverse: 'n_p_c_masters',
      $col_order: 1,
      foreignKey: {
        name: 'n_p_cs_key',
        $type: 'ref|string',
      },
      targetKey: 'id',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'signature_mod__mod',
      $inverse: 'n_p_c_masters',
      $col_order: 4,
      foreignKey: {
        name: 'signature_mod__mods_key',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'achievement_item',
      $inverse: 'n_p_c_masters',
      $col_order: 9,
      foreignKey: {
        name: 'achievement_items_key',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'talisman__achievement_item',
      $inverse: 'n_p_c_masters',
      $col_order: 15,
      foreignKey: {
        name: 'talisman__achievement_items_key',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'signature_mod_spawn_weight__tags',
      through: {
        model: models.NPCMasterHabtmSignatureModSpawnWeightTag,
        unique: false,
      },
      foreignKey: 'n_p_c_master_row',
      otherKey: 'tag_row',
      $col_order: 10,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'unknown_weight__tags',
      through: {
        model: models.NPCMasterHabtmUnknownWeightTag,
        unique: false,
      },
      foreignKey: 'n_p_c_master_row',
      otherKey: 'tag_row',
      $col_order: 12,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'master_level5__achievement_items',
      through: {
        model: models.NPCMasterHabtmMasterLevel5Achievementitem,
        unique: false,
      },
      foreignKey: 'n_p_c_master_row',
      otherKey: 'achievement_item_row',
      $col_order: 16,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'NPCMaster.dat';
  return model;
};
