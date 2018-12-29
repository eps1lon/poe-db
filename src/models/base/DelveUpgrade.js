module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DelveUpgrade',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      upgrade_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      stat_values: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      cost: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      _stats_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 2,
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
              attribute: 'delve_upgrade_type_key',
            },
          ],
          name: 'index_delve_upgrade_type_key',
        },
        {
          fields: [
            {
              attribute: 'achievement_items_key',
            },
          ],
          name: 'index_achievement_items_key',
        },
      ],
      tableName: 'delve_upgrades',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.DelveUpgradeType, {
      as: 'delve_upgrade_type',
      $inverse: 'delve_upgrades',
      $col_order: 0,
      foreignKey: {
        name: 'delve_upgrade_type_key',
        $type: 'int',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.AchievementItem, {
      as: 'achievement_item',
      $inverse: 'delve_upgrades',
      $col_order: 6,
      foreignKey: {
        name: 'achievement_items_key',
        $type: 'ulong',
        $col_order: 6,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stat, {
      as: 'stats',
      through: {
        model: models.DelveUpgradeHabtmStat,
        unique: false,
      },
      foreignKey: 'delve_upgrade_row',
      otherKey: 'stat_row',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DelveUpgrades.dat';
  return model;
};
