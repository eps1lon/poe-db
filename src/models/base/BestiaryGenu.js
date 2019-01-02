module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BestiaryGenu',
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
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      name2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      icon: {
        type: DataTypes.TEXT,
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
              attribute: 'bestiary_groups_key',
            },
          ],
          name: 'index_bestiary_groups_key',
        },
      ],
      tableName: 'bestiary_genus',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BestiaryGroup, {
      as: 'bestiary_group',
      $inverse: 'bestiary_genus',
      $col_order: 2,
      foreignKey: {
        name: 'bestiary_groups_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'BestiaryGenus.dat';
  return model;
};
