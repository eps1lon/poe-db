module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'IncursionUniqueUpgrade',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unique_items_key: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
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
              attribute: 'incursion_unique_upgrade_components_key',
            },
          ],
          name: 'index_incursion_unique_upgrade_components_key',
        },
      ],
      tableName: 'incursion_unique_upgrades',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.IncursionUniqueUpgradeComponent, {
      as: 'incursion_unique_upgrade_component',
      $inverse: 'incursion_unique_upgrades',
      $col_order: 0,
      foreignKey: {
        name: 'incursion_unique_upgrade_components_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'IncursionUniqueUpgrades.dat';
  return model;
};
