module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CharacterStartItem',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      sockets: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      inventory_index: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      slot_x: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      slot_y: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      stack_size: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      links: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      skill_gem_levels: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
      },
      data0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 14,
      },
      _socketed_skill_gems_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 4,
      },
      _mods_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
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
              attribute: 'character_start_states_key',
            },
          ],
          name: 'index_character_start_states_key',
        },
        {
          fields: [
            {
              attribute: 'base_item_types_key',
            },
          ],
          name: 'index_base_item_types_key',
        },
      ],
      tableName: 'character_start_items',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.CharacterStartState, {
      as: 'character_start_state',
      $inverse: 'character_start_items',
      $col_order: 0,
      foreignKey: {
        name: 'character_start_states_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BaseItemType, {
      as: 'base_item_type',
      $inverse: 'character_start_items',
      $col_order: 2,
      foreignKey: {
        name: 'base_item_types_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.SkillGem, {
      as: 'socketed_skill_gems',
      through: {
        model: models.CharacterStartItemHabtmSocketedSkillgem,
        unique: false,
      },
      foreignKey: 'character_start_item_row',
      otherKey: 'skill_gem_row',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'mods',
      through: {
        model: models.CharacterStartItemHabtmMod,
        unique: false,
      },
      foreignKey: 'character_start_item_row',
      otherKey: 'mod_row',
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'CharacterStartItems.dat';
  return model;
};
