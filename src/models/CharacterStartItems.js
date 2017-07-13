module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CharacterStartItems',
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
        allowNull: false,
        $col_order: 1,
      },
      sockets: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      inventory_index: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      slot_x: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      slot_y: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      stack_size: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      links: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 10,
      },
      skill_gem_levels: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 12,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 13,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {
    model.belongsTo(models.CharacterStartStates, {
      foreignKey: {
        name: 'character_start_states_key',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.CharacterStartStates.hasMany(model, {
      foreignKey: {
        name: 'character_start_states_key',
        $col_order: 0,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.BaseItemTypes, {
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.BaseItemTypes.hasMany(model, {
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 2,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.SkillGems, {
      as: 'socketed_skill_gems',
      through: 'SocketedSkillGems',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      as: 'mods',
      through: 'CharacterStartItemsMods',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'CharacterStartItems.dat';
  return model;
};
