module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Shrine',
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
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      charges_shared: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      unknown4: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      unknown5: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      unknown10: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
      },
      unknown11: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 12,
      },
      unknown14: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 14,
      },
      is_p_v_p_only: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 16,
      },
      unknown17: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 17,
      },
      is_lesser_shrine: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 18,
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
              attribute: 'player__shrine_buffs_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'monster__shrine_buffs_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'summon_monster__monster_varieties_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'summon_player__monster_varieties_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'shrine_sounds_key',
            },
          ],
        },
      ],
      tableName: 'shrines',
    },
  );

  model.associate = models => {
    model.belongsTo(models.ShrineBuff, {
      foreignKey: {
        name: 'player__shrine_buffs_key',
        $col_order: 4,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ShrineBuff, {
      foreignKey: {
        name: 'monster__shrine_buffs_key',
        $col_order: 8,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVariety, {
      foreignKey: {
        name: 'summon_monster__monster_varieties_key',
        $col_order: 9,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVariety, {
      foreignKey: {
        name: 'summon_player__monster_varieties_key',
        $col_order: 10,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ShrineSound, {
      foreignKey: {
        name: 'shrine_sounds_key',
        $col_order: 13,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'achievement_items',
      through: models.ShrineAchievementItem,
      foreignKey: 'shrine_row',
      otherKey: 'achievement_item_row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Shrines.dat';
  return model;
};
