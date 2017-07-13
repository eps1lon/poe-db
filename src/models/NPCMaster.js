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
    },
  );

  model.associate = models => {
    model.belongsTo(models.NPCs, {
      foreignKey: {
        name: 'np_cs_key',
        $col_order: 1,
      },
      targetKey: 'id',
      nullable: true,
      constraints: false,
    });
    models.NPCs.hasMany(model, {
      foreignKey: {
        name: 'np_cs_key',
        $col_order: 1,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'id',
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'signature_mod_mods_key',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Mods.hasMany(model, {
      foreignKey: {
        name: 'signature_mod_mods_key',
        $col_order: 4,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.AchievementItems, {
      foreignKey: {
        name: 'achievement_items_key',
        $col_order: 9,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.AchievementItems.hasMany(model, {
      foreignKey: {
        name: 'achievement_items_key',
        $col_order: 9,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.AchievementItems, {
      foreignKey: {
        name: 'talisman_achievement_items_key',
        $col_order: 15,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.AchievementItems.hasMany(model, {
      foreignKey: {
        name: 'talisman_achievement_items_key',
        $col_order: 15,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.Tags, {
      as: 'signature_mod_spawn_weight_tags',
      through: 'SignatureModSpawnWeightTags',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tags, {
      as: 'unknown_weight_tags',
      through: 'UnknownWeightTags',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItems, {
      as: 'master_level5_achievement_items',
      through: 'MasterLevel5AchievementItems',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'NPCMaster.dat';
  return model;
};
