module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BestiaryCapturableMonster',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      icon_small: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      icon: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      flag2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      flag3: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
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
        {
          fields: [
            {
              attribute: 'bestiary_groups_key',
            },
          ],
          name: 'index_bestiary_groups_key',
        },
        {
          fields: [
            {
              attribute: 'boss_monster_varieties_key',
            },
          ],
          name: 'index_boss_monster_varieties_key',
        },
        {
          fields: [
            {
              attribute: 'bestiary_genus_key',
            },
          ],
          name: 'index_bestiary_genus_key',
        },
        {
          fields: [
            {
              attribute: 'bestiary_capturable_monsters_key',
            },
          ],
          name: 'index_bestiary_capturable_monsters_key',
        },
      ],
      tableName: 'bestiary_capturable_monsters',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterVariety, {
      as: 'monster_variety',
      $inverse: 'bestiary_capturable_monsters',
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
    model.belongsTo(models.BestiaryGroup, {
      as: 'bestiary_group',
      $inverse: 'bestiary_capturable_monsters',
      $col_order: 1,
      foreignKey: {
        name: 'bestiary_groups_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVariety, {
      as: 'boss_monster_variety',
      $inverse: 'bestiary_capturable_monsters',
      $col_order: 7,
      foreignKey: {
        name: 'boss_monster_varieties_key',
        $type: 'ulong',
        $col_order: 7,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BestiaryGenu, {
      as: 'bestiary_genu',
      $inverse: 'bestiary_capturable_monsters',
      $col_order: 8,
      foreignKey: {
        name: 'bestiary_genus_key',
        $type: 'ulong',
        $col_order: 8,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BestiaryCapturableMonster, {
      as: 'bestiary_capturable_monster',
      $inverse: 'bestiary_capturable_monsters',
      $col_order: 10,
      foreignKey: {
        name: 'bestiary_capturable_monsters_key',
        $type: 'int',
        $col_order: 10,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'BestiaryCapturableMonsters.dat';
  return model;
};
