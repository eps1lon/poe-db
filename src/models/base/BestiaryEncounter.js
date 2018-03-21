module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BestiaryEncounter',
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
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      max_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      spawn_weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      monster_spawner_id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
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
              attribute: 'monster_packs_key',
            },
          ],
          name: 'index_monster_packs_key',
        },
      ],
      tableName: 'bestiary_encounters',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterPack, {
      as: 'monster_pack',
      $inverse: 'bestiary_encounters',
      $col_order: 4,
      foreignKey: {
        name: 'monster_packs_key',
        $type: 'ulong',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'BestiaryEncounters.dat';
  return model;
};
