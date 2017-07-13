module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Bloodlines',
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
      min_zone_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      max_zone_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      unknown8: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      unknown11: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      unknown20: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 12,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 13,
      },
      keys2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 14,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 15,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {
    model.belongsTo(models.BuffDefinitions, {
      foreignKey: {
        name: 'buff_definitions_key',
        $col_order: 7,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.BuffDefinitions.hasMany(model, {
      foreignKey: {
        name: 'buff_definitions_key',
        $col_order: 7,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.MonsterVarieties, {
      foreignKey: {
        name: 'monster_varieties_key',
        $col_order: 11,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.MonsterVarieties.hasMany(model, {
      foreignKey: {
        name: 'monster_varieties_key',
        $col_order: 11,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.Mods, {
      as: 'mods',
      through: 'BloodlinesMods',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tags, {
      as: 'spawn_weight_tags',
      through: 'BloodlinesSpawnWeightTags',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Tags, {
      as: 'item_weight_tags',
      through: 'BloodlinesItemWeightTags',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Bloodlines.dat';
  return model;
};
