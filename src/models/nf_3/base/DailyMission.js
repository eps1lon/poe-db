module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DailyMission',
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
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      spawn_weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      unknown8: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
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
              attribute: 'npc_talk_key',
            },
          ],
          name: 'index_npc_talk_key',
        },
        {
          fields: [
            {
              attribute: 'pvp_types_key',
            },
          ],
          name: 'index_pvp_types_key',
        },
      ],
      tableName: 'daily_missions',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.NPCTalk, {
      as: 'npc_talk',
      $inverse: 'daily_missions',
      $col_order: 6,
      foreignKey: {
        name: 'npc_talk_key',
        $type: 'ulong',
        $col_order: 6,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.PVPType, {
      as: 'pvp_type',
      $inverse: 'daily_missions',
      $col_order: 9,
      foreignKey: {
        name: 'pvp_types_key',
        $type: 'int',
        $col_order: 9,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Character, {
      as: 'characters',
      through: {
        model: models.DailyMissionHabtmCharacter,
        unique: false,
      },
      foreignKey: 'daily_mission_row',
      otherKey: 'character_row',
      $col_order: 7,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DailyMissions.dat';
  return model;
};
