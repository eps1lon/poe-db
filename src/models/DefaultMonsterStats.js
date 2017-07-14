module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DefaultMonsterStats',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      display_level: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      damage: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      evasion: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      accuracy: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      life: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      experience: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      ally_life: {
        type: DataTypes.INTEGER,
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
          fields: ['difficulty_key'],
        },
      ],
    },
  );

  model.associate = models => {
    model.belongsTo(models.Difficulties, {
      foreignKey: {
        name: 'difficulty_key',
        $col_order: 7,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Difficulties.hasMany(model, {
      foreignKey: {
        name: 'difficulty_key',
        $col_order: 7,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'DefaultMonsterStats.dat';
  return model;
};
