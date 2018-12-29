module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'IncursionRoom',
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
      tier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      present_arm_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      int_id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      past_arm_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      tsi_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      ui_icon: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      flavour_text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 15,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 16,
      },
      _achievement_items_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 14,
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
              attribute: 'room_upgrade_incursion_rooms_key',
            },
          ],
          name: 'index_room_upgrade_incursion_rooms_key',
        },
        {
          fields: [
            {
              attribute: 'mods_key',
            },
          ],
          name: 'index_mods_key',
        },
        {
          fields: [
            {
              attribute: 'incursion_architect_key',
            },
          ],
          name: 'index_incursion_architect_key',
        },
        {
          fields: [
            {
              attribute: 'room_upgrade_from_incursion_rooms_key',
            },
          ],
          name: 'index_room_upgrade_from_incursion_rooms_key',
        },
      ],
      tableName: 'incursion_rooms',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.IncursionRoom, {
      as: 'room_upgrade_incursion_room',
      $inverse: 'incursion_rooms',
      $col_order: 4,
      foreignKey: {
        name: 'room_upgrade_incursion_rooms_key',
        $type: 'uint',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'mod',
      $inverse: 'incursion_rooms',
      $col_order: 5,
      foreignKey: {
        name: 'mods_key',
        $type: 'ulong',
        $col_order: 5,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.IncursionArchitect, {
      as: 'incursion_architect',
      $inverse: 'incursion_rooms',
      $col_order: 8,
      foreignKey: {
        name: 'incursion_architect_key',
        $type: 'ulong',
        $col_order: 8,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.IncursionRoom, {
      as: 'room_upgrade_from_incursion_room',
      $inverse: 'incursion_rooms',
      $col_order: 17,
      foreignKey: {
        name: 'room_upgrade_from_incursion_rooms_key',
        $type: 'uint',
        $col_order: 17,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.AchievementItem, {
      as: 'achievement_items',
      through: {
        model: models.IncursionRoomHabtmAchievementItem,
        unique: false,
      },
      foreignKey: 'incursion_room_row',
      otherKey: 'achievement_item_row',
      $col_order: 14,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'IncursionRooms.dat';
  return model;
};
