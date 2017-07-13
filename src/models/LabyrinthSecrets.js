module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthSecrets',
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
    },
  );

  model.associate = models => {
    model.belongsTo(models.AchievementItems, {
      foreignKey: {
        name: 'achievement_items_key',
        $col_order: 17,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.AchievementItems.hasMany(model, {
      foreignKey: {
        name: 'achievement_items_key',
        $col_order: 17,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.LabyrinthSecretEffects, {
      as: 'labyrinth_secret_effects0',
      through: 'LabyrinthSecretsLabyrinthSecretEffects',
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.LabyrinthSecretEffects, {
      as: 'labyrinth_secret_effects1',
      through: 'LabyrinthSecretsLabyrinthSecretEffects',
      $col_order: 6,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.LabyrinthSecretEffects, {
      as: 'labyrinth_secret_effects2',
      through: 'LabyrinthSecretsLabyrinthSecretEffects',
      $col_order: 7,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.LabyrinthSecretEffects, {
      as: 'labyrinth_secret_effects3',
      through: 'LabyrinthSecretsLabyrinthSecretEffects',
      $col_order: 9,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'LabyrinthSecrets.dat';
  return model;
};
