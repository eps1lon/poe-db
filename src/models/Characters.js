const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Characters',
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
      ao_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      act_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      base_max_life: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      base_max_mana: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      weapon_speed: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      min_damage: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      max_damage: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      max_attack_distance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      icon: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      integer_id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      base_strength: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      base_dexterity: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      base_intelligence: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      keys0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown13: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown14: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown15: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown16: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      character_size: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      intro_sound_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown28: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      trait_description: {
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
    model.belongsTo(models.BaseItemTypes, {
      foreignKey: 'start_skill_gem_base_item_types_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BaseItemTypes, {
      foreignKey: 'start_weapon_base_item_types_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Characters.dat';
  return model;
};
