module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthSecret',
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
      id2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      data0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      unknown5: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      unknown6: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      unknown13: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      flag0: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 10,
      },
      flag1: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 12,
      },
      flag2: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 13,
      },
      flag3: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 14,
      },
      flag4: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 15,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 16,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['achievement_items_key'],
        },
      ],
      tableName: 'labyrinth_secrets',
    },
  );

  model.associate = models => {
    model.belongsTo(models.AchievementItem, {
      foreignKey: {
        name: 'achievement_items_key',
        $col_order: 17,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.AchievementItem.hasMany(model, {
      foreignKey: {
        name: 'achievement_items_key',
        $col_order: 17,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.LabyrinthSecretEffect, {
      as: 'labyrinth_secret_effects0',
      through: 'LabyrinthSecretLabyrinthSecretEffect',
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.LabyrinthSecretEffect, {
      as: 'labyrinth_secret_effects1',
      through: 'LabyrinthSecretLabyrinthSecretEffect',
      $col_order: 6,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.LabyrinthSecretEffect, {
      as: 'labyrinth_secret_effects2',
      through: 'LabyrinthSecretLabyrinthSecretEffect',
      $col_order: 7,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.LabyrinthSecretEffect, {
      as: 'labyrinth_secret_effects3',
      through: 'LabyrinthSecretLabyrinthSecretEffect',
      $col_order: 9,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'LabyrinthSecrets.dat';
  return model;
};
