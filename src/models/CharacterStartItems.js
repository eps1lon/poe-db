const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CharacterStartItems',
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
      sockets: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      inventory_index: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      slot_x: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      slot_y: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      stack_size: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      links: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      skill_gem_levels: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
      key0: {
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
    model.belongsTo(models.CharacterStartStates, {
      foreignKey: 'character_start_states_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BaseItemTypes, {
      foreignKey: 'base_item_types_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.SkillGems, {
      through: 'SocketedSkillGems',
      as: 'socketed_skill_gems',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      through: 'CharacterStartItemsMods',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
