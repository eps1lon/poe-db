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
        },
        {
          fields: [
            {
              attribute: 'pvp_types_key',
            },
          ],
        },
      ],
      tableName: 'daily_missions',
    },
  );

  model.associate = models => {
    model.belongsTo(models.NPCTalk, {
      foreignKey: {
        name: 'npc_talk_key',
        $col_order: 6,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.NPCTalk.hasMany(model, {
      foreignKey: {
        name: 'npc_talk_key',
        $col_order: 6,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.PVPType, {
      foreignKey: {
        name: 'pvp_types_key',
        $col_order: 9,
        $type: 'int',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.PVPType.hasMany(model, {
      foreignKey: {
        name: 'pvp_types_key',
        $col_order: 9,
        $type: 'int',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.Character, {
      as: 'characters',
      through: 'DailyMissionCharacter',
      $col_order: 7,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DailyMissions.dat';
  return model;
};
