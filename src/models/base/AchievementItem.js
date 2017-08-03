module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'AchievementItem',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      completions_required: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
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
              attribute: 'achievements_key',
            },
          ],
          name: 'index_achievements_key',
        },
      ],
      tableName: 'achievement_items',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Achievement, {
      as: 'achievement',
      $inverse: 'achievement_items',
      $col_order: 5,
      foreignKey: {
        name: 'achievements_key',
        $type: 'ulong',
        $col_order: 5,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Achievement.hasMany(model, {
      as: 'achievement_items',
      $inverse: 'achievement_items',
      $col_order: 5,
      foreignKey: {
        name: 'achievements_key',
        $type: 'ulong',
        $col_order: 5,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'AchievementItems.dat';
  return model;
};
