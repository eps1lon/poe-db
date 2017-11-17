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
        allowNull: true,
        $col_order: 0,
      },
      id2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      data0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      flag0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      flag1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      flag2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
      },
      flag3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 14,
      },
      flag4: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 15,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 16,
      },
      labyrinth_tier_minimum: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 18,
      },
      labyrinth_tier_maximum: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 19,
      },
      flag5: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 20,
      },
      _labyrinth_secret_effects0_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 5,
      },
      _labyrinth_secret_effects1_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 6,
      },
      _labyrinth_secret_effects2_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 7,
      },
      _labyrinth_secret_effects3_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 9,
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
              attribute: 'achievement_items_key',
            },
          ],
          name: 'index_achievement_items_key',
        },
      ],
      tableName: 'labyrinth_secrets',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.AchievementItem, {
      as: 'achievement_item',
      $inverse: 'labyrinth_secrets',
      $col_order: 17,
      foreignKey: {
        name: 'achievement_items_key',
        $type: 'ulong',
        $col_order: 17,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.LabyrinthSecretEffect, {
      as: 'labyrinth_secret_effects0',
      through: {
        model: models.LabyrinthSecretHabtmLabyrinthSecretEffects0,
        unique: false,
      },
      foreignKey: 'labyrinth_secret_row',
      otherKey: 'labyrinth_secret_effect_row',
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.LabyrinthSecretEffect, {
      as: 'labyrinth_secret_effects1',
      through: {
        model: models.LabyrinthSecretHabtmLabyrinthSecretEffects1,
        unique: false,
      },
      foreignKey: 'labyrinth_secret_row',
      otherKey: 'labyrinth_secret_effect_row',
      $col_order: 6,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.LabyrinthSecretEffect, {
      as: 'labyrinth_secret_effects2',
      through: {
        model: models.LabyrinthSecretHabtmLabyrinthSecretEffects2,
        unique: false,
      },
      foreignKey: 'labyrinth_secret_row',
      otherKey: 'labyrinth_secret_effect_row',
      $col_order: 7,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.LabyrinthSecretEffect, {
      as: 'labyrinth_secret_effects3',
      through: {
        model: models.LabyrinthSecretHabtmLabyrinthSecretEffects3,
        unique: false,
      },
      foreignKey: 'labyrinth_secret_row',
      otherKey: 'labyrinth_secret_effect_row',
      $col_order: 9,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'LabyrinthSecrets.dat';
  return model;
};
