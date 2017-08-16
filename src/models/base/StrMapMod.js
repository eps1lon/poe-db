module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'StrMapMod',
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
        $col_order: 1,
      },
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      max_level: {
        type: DataTypes.INTEGER,
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
              attribute: 'mods_key',
            },
          ],
          name: 'index_mods_key',
        },
      ],
      tableName: 'str_map_mods',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Mod, {
      as: 'mod',
      $inverse: 'str_map_mods',
      $col_order: 4,
      foreignKey: {
        name: 'mods_key',
        $type: 'ulong',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'StrMapMods.dat';
  return model;
};
