module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BestiaryGroup',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      illustraiton: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      group_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      icon: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      icon_small: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      _achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 7,
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
              attribute: 'bestiary_families_key',
            },
          ],
          name: 'index_bestiary_families_key',
        },
      ],
      tableName: 'bestiary_groups',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BestiaryFamily, {
      as: 'bestiary_family',
      $inverse: 'bestiary_groups',
      $col_order: 6,
      foreignKey: {
        name: 'bestiary_families_key',
        $type: 'ulong',
        $col_order: 6,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'achievement_items',
      through: {
        model: models.BestiaryGroupHabtmAchievementItem,
        unique: false,
      },
      foreignKey: 'bestiary_group_row',
      otherKey: 'achievement_item_row',
      $col_order: 7,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'BestiaryGroups.dat';
  return model;
};
