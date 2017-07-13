const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'NPCTalk',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      dialogue_option: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      data0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      data2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      script: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown11: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown12: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown15: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      keys0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      script2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      data5: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      data6: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown25: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      flag2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      unknown25c: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown26: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown27: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      data7: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown30: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      flag3: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      key2: {
        type: DataTypes.TEXT,
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
      foreignKey: 'npc_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Quest, {
      foreignKey: 'quest_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.NPCTextAudio, {
      through: 'NPCTalkNPCTextAudio',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
