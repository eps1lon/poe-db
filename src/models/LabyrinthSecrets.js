const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthSecrets',
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
      id2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      data0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      unknown5: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown6: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown13: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      flag0: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      flag1: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      flag2: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      flag3: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      flag4: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      name: {
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
    model.belongsTo(models.AchievementItems, {
      foreignKey: 'achievement_items_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.LabyrinthSecretEffects, {
      as: 'labyrinth_secret_effects0',
      through: 'LabyrinthSecretsLabyrinthSecretEffects',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.LabyrinthSecretEffects, {
      as: 'labyrinth_secret_effects1',
      through: 'LabyrinthSecretsLabyrinthSecretEffects',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.LabyrinthSecretEffects, {
      as: 'labyrinth_secret_effects2',
      through: 'LabyrinthSecretsLabyrinthSecretEffects',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.LabyrinthSecretEffects, {
      as: 'labyrinth_secret_effects3',
      through: 'LabyrinthSecretsLabyrinthSecretEffects',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
