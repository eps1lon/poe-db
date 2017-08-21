module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthTrinketHabtmLabyrinthSecret',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        $col_order: -1,
      },
      priority: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        $col_order: -1,
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
              attribute: 'labyrinth_trinket_row',
            },
            {
              attribute: 'labyrinth_secret_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'labyrinth_trinket__labyrinth_secrets',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.LabyrinthTrinket, {
      foreignKey: 'labyrinth_trinket_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.LabyrinthSecret, {
      foreignKey: 'labyrinth_secret_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
