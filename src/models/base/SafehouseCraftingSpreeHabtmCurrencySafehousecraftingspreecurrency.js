module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'SafehouseCraftingSpreeHabtmCurrencySafehousecraftingspreecurrency',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        $col_order: -1,
      },
      priority: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        $col_order: -1,
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        $col_order: 2,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'safehouse_crafting_spree_row',
            },
            {
              attribute: 'safehouse_crafting_spree_currency_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'safeho_craft_spree__curre__safeh_craft_spree_curre',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.SafehouseCraftingSpree, {
      foreignKey: 'safehouse_crafting_spree_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.SafehouseCraftingSpreeCurrency, {
      foreignKey: 'safehouse_crafting_spree_currency_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
