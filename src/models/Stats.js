const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Stats',
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
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      is_local: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      is_weapon_local: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      flag3: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      flag5: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      flag6: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      flag7: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown0: {
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
    model.belongsTo(models.Stats, {
      foreignKey: 'main_hand_alias_stats_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Stats, {
      foreignKey: 'off_hand_alias_stats_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Stats.dat';
  return model;
};
