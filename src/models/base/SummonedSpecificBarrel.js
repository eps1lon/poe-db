module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'SummonedSpecificBarrel',
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
      key1: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      key2: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
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
              attribute: 'chests_key',
            },
          ],
          name: 'index_chests_key',
        },
      ],
      tableName: 'summoned_specific_barrels',
    },
  );

  model.associate = models => {
    model.belongsTo(models.Chest, {
      as: 'chest',
      $inverse: 'summoned_specific_barrels',
      $col_order: 1,
      foreignKey: {
        name: 'chests_key',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'SummonedSpecificBarrels.dat';
  return model;
};
