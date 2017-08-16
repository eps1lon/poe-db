module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Strongbox',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: true,
        $col_order: -1,
      },
      spawn_weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      is_cartographer_box: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
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
      tableName: 'strongboxes',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Chest, {
      as: 'chest',
      $inverse: 'strongboxes',
      $col_order: 0,
      foreignKey: {
        name: 'chests_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Strongboxes.dat';
  return model;
};
