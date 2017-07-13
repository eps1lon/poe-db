const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CraftingBenchOptions',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      master_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      crafting_bench_custom_action: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      sockets: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      socket_colours: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      links: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      item_quantity: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
      },
      is_disabled: {
        type: DataTypes.BOOLEAN,
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
    model.belongsTo(models.Mods, {
      foreignKey: 'mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      through: 'CostBaseItemTypes',
      as: 'cost_base_item_types',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.ItemClasses, {
      through: 'CraftingBenchOptionsItemClasses',
      nullable: true,
      constraints: false,
    });
  };

  return model;
};
