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
      is_pvp_only: {
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
      _achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: '',
        $col_order: 15,
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
              attribute: 'player_shrine_buffs_key',
            },
          ],
          name: 'index_player_shrine_buffs_key',
        },
        {
          fields: [
            {
              attribute: 'monster_shrine_buffs_key',
            },
          ],
          name: 'index_monster_shrine_buffs_key',
        },
        {
          fields: [
            {
              attribute: 'summon_monster_monster_varieties_key',
            },
          ],
          name: 'index_summon_monster_monster_varieties_key',
        },
        {
          fields: [
            {
              attribute: 'summon_player_monster_varieties_key',
            },
          ],
          name: 'index_summon_player_monster_varieties_key',
        },
        {
          fields: [
            {
              attribute: 'shrine_sounds_key',
            },
          ],
          name: 'index_shrine_sounds_key',
        },
      ],
      tableName: 'shrines',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.ShrineBuff, {
      as: 'player_shrine_buff',
      $inverse: 'shrines',
      $col_order: 4,
      foreignKey: {
        name: 'player_shrine_buffs_key',
        $type: 'ulong',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ShrineBuff, {
      as: 'monster_shrine_buff',
      $inverse: 'shrines',
      $col_order: 8,
      foreignKey: {
        name: 'monster_shrine_buffs_key',
        $type: 'ulong',
        $col_order: 8,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVariety, {
      as: 'summon_monster_monster_variety',
      $inverse: 'shrines',
      $col_order: 9,
      foreignKey: {
        name: 'summon_monster_monster_varieties_key',
        $type: 'ulong',
        $col_order: 9,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVariety, {
      as: 'summon_player_monster_variety',
      $inverse: 'shrines',
      $col_order: 10,
      foreignKey: {
        name: 'summon_player_monster_varieties_key',
        $type: 'ulong',
        $col_order: 10,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ShrineSound, {
      as: 'shrine_sound',
      $inverse: 'shrines',
      $col_order: 13,
      foreignKey: {
        name: 'shrine_sounds_key',
        $type: 'ulong',
        $col_order: 13,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'achievement_items',
      through: {
        model: models.ShrineHabtmAchievementItem,
        unique: false,
      },
      foreignKey: 'shrine_row',
      otherKey: 'achievement_item_row',
      $col_order: 15,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Shrines.dat';
  return model;
};
