module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BeyondDemon',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
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
              attribute: 'monster_varieties_key',
            },
          ],
          name: 'index_monster_varieties_key',
        },
      ],
      tableName: 'beyond_demons',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterVariety, {
      as: 'monster_variety',
      $inverse: 'beyond_demons',
      $col_order: 0,
      foreignKey: {
        name: 'monster_varieties_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'BeyondDemons.dat';
  return model;
};
