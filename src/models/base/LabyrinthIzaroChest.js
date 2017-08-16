module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthIzaroChest',
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
      spawn_weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      min_labyrinth_tier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      max_labyrinth_tier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
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
              attribute: 'chests_key',
            },
          ],
          name: 'index_chests_key',
        },
      ],
      tableName: 'labyrinth_izaro_chests',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Chest, {
      as: 'chest',
      $inverse: 'labyrinth_izaro_chests',
      $col_order: 1,
      foreignKey: {
        name: 'chests_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'LabyrinthIzaroChests.dat';
  return model;
};
