module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'SafehouseCraftingSpree',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      chance: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      data0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      _currency_safehouse_crafting_spree_currencies_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 4,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'betrayal_jobs_key',
            },
          ],
          name: 'index_betrayal_jobs_key',
        },
        {
          fields: [
            {
              attribute: 'betrayal_ranks_key',
            },
          ],
          name: 'index_betrayal_ranks_key',
        },
      ],
      tableName: 'safehouse_crafting_sprees',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BetrayalJob, {
      as: 'betrayal_job',
      $inverse: 'safehouse_crafting_sprees',
      $col_order: 0,
      foreignKey: {
        name: 'betrayal_jobs_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BetrayalRank, {
      as: 'betrayal_rank',
      $inverse: 'safehouse_crafting_sprees',
      $col_order: 1,
      foreignKey: {
        name: 'betrayal_ranks_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.SafehouseCraftingSpreeCurrency, {
      as: 'currency_safehouse_crafting_spree_currencies',
      through: {
        model:
          models.SafehouseCraftingSpreeHabtmCurrencySafehousecraftingspreecurrency,
        unique: false,
      },
      foreignKey: 'safehouse_crafting_spree_row',
      otherKey: 'safehouse_crafting_spree_currency_row',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'SafehouseCraftingSpree.dat';
  return model;
};
