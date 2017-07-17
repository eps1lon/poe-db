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
              length: 255,
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'signature_mod__mods_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'achievement_items_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'talisman__achievement_items_key',
            },
          ],
        },
      ],
      tableName: 'n_p_c_masters',
    },
  );

  model.associate = models => {
    model.belongsTo(models.NPC, {
      foreignKey: {
        name: 'n_p_cs_key',
        $col_order: 1,
        $type: 'ref|string',
      },
      targetKey: 'id',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      foreignKey: {
        name: 'signature_mod__mods_key',
        $col_order: 4,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      foreignKey: {
        name: 'achievement_items_key',
        $col_order: 9,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      foreignKey: {
        name: 'talisman__achievement_items_key',
        $col_order: 15,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'signature_mod_spawn_weight__tags',
      through: models.NPCMasterSignatureModSpawnWeightTag,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'unknown_weight__tags',
      through: models.NPCMasterUnknownWeightTag,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'master_level5__achievement_items',
      through: models.NPCMasterMasterLevel5Achievementitem,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'NPCMaster.dat';
  return model;
};
