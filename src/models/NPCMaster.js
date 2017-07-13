const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'NPCMaster',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      is_str_master: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      is_dex_master: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      is_int_master: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      hideout: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      keys0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown7: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      key2: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
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
      foreignKey: 'np_cs_key',
      target: 'id',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'signature_mod_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItems, {
      foreignKey: 'achievement_items_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItems, {
      foreignKey: 'talisman_achievement_items_key',
      target: 'row',
      nullable: true,
      constraints: false,
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
