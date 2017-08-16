module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Achievement',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: true,
        $col_order: -1,
      },
      id: {
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
      objective: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      unknown_unique: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      flag2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      flag3: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      flag4: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
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
              attribute: 'achievement_sets_display_key',
            },
          ],
          name: 'index_achievement_sets_display_key',
        },
      ],
      tableName: 'achievements',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.AchievementSetsDisplay, {
      as: 'achievement_sets_display',
      $inverse: 'achievements',
      $col_order: 2,
      foreignKey: {
        name: 'achievement_sets_display_key',
        $type: 'int',
        $col_order: 2,
      },
      targetKey: 'id',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Achievements.dat';
  return model;
};
