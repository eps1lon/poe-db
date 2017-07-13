const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthSectionLayout',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      flags1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      flags2: {
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
    model.belongsTo(models.LabyrinthSection, {
      foreignKey: 'labyrinth_section_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.LabyrinthSecrets, {
      foreignKey: 'labyrinth_secrets_key0',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.LabyrinthSecrets, {
      foreignKey: 'labyrinth_secrets_key1',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.LabyrinthAreas, {
      foreignKey: 'labyrinth_areas_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.LabyrinthNodeOverrides, {
      foreignKey: 'labyrinth_node_overrides_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.LabyrinthSectionLayout, {
      through: 'LabyrinthSectionLayoutLabyrinthSectionLayout',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
