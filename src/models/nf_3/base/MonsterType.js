module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterType',
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
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      is_summoned: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      armour: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      evasion: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      energy_shield_from_life: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      damage_spread: {
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
          fields: [
            {
              attribute: 'monster_resistances_key',
            },
          ],
          name: 'index_monster_resistances_key',
        },
      ],
      tableName: 'monster_types',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterResistance, {
      as: 'monster_resistance',
      $inverse: 'monster_types',
      $col_order: 8,
      foreignKey: {
        name: 'monster_resistances_key',
        $type: 'ulong',
        $col_order: 8,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tag, {
      as: 'tags',
      through: {
        model: models.MonsterTypeHabtmTag,
        unique: false,
      },
      foreignKey: 'monster_type_row',
      otherKey: 'tag_row',
      $col_order: 7,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MonsterTypes.dat';
  return model;
};
