const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'NPCs',
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
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      metadata: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown5: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      short_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown7: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown8: {
        type: DataTypes.INTEGER,
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
    model.belongsTo(models.NPCMaster, {
      foreignKey: 'npc_master_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPCShop, {
      foreignKey: 'npc_shop_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPCAudio, {
      foreignKey: 'npc_audio_key1',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPCAudio, {
      foreignKey: 'npc_audio_key2',
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'NPCs.dat';
  return model;
};
