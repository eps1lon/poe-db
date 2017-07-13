module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'QuestStaticRewards',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unknown0: {
        type: DataTypes.INTEGER,
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
      stat_value: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      unknown2: {
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
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemTypes, {
      foreignKey: {
        name: 'stats_key',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.BaseItemTypes.hasMany(model, {
      foreignKey: {
        name: 'stats_key',
        $col_order: 2,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Difficulties, {
      foreignKey: {
        name: 'difficulty_key',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Difficulties.hasMany(model, {
      foreignKey: {
        name: 'difficulty_key',
        $col_order: 4,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.Quest, {
      foreignKey: {
        name: 'quest_key',
        $col_order: 5,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Quest.hasMany(model, {
      foreignKey: {
        name: 'quest_key',
        $col_order: 5,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'QuestStaticRewards.dat';
  return model;
};
