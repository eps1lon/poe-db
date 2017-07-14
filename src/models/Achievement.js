module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Achievement',
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
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      objective: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      unknown_unique: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      flag2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      flag3: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      flag4: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 10,
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
              attribute: 'achievement_sets_display_key',
            },
          ],
        },
      ],
      tableName: 'achievements',
    },
  );

  model.associate = models => {
    model.belongsTo(models.AchievementSetsDisplay, {
      foreignKey: {
        name: 'achievement_sets_display_key',
        $col_order: 2,
        $type: 'int',
      },
      targetKey: 'id',
      nullable: true,
      constraints: false,
    });
    models.AchievementSetsDisplay.hasMany(model, {
      foreignKey: {
        name: 'achievement_sets_display_key',
        $col_order: 2,
        $type: 'int',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'id',
    });
  };

  model.DAT_FILE = 'Achievements.dat';
  return model;
};
