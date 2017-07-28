module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ActiveSkill',
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
      displayed_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      index3: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      icon_dds_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      active_skill_target_types: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      active_skill_types: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      website_description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      website_image: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 10,
      },
      unknown13: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 12,
      },
      skill_totem_id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 13,
      },
      is_manually_casted: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 14,
      },
      unknown19: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 17,
      },
      _weapon_restriction_item_classes_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 7,
      },
      _input_stat_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 15,
      },
      _output_stat_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 16,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'active_skills',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.ItemClass, {
      as: 'weapon_restriction_item_classes',
      through: {
        model: models.ActiveSkillHabtmWeaponRestrictionItemclass,
        unique: false,
      },
      foreignKey: 'active_skill_row',
      otherKey: 'item_class_row',
      $col_order: 7,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stat, {
      as: 'input_stat',
      through: {
        model: models.ActiveSkillHabtmInputStat,
        unique: false,
      },
      foreignKey: 'active_skill_row',
      otherKey: 'stat_row',
      $col_order: 15,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Stat, {
      as: 'output_stat',
      through: {
        model: models.ActiveSkillHabtmOutputStat,
        unique: false,
      },
      foreignKey: 'active_skill_row',
      otherKey: 'stat_row',
      $col_order: 16,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ActiveSkills.dat';
  return model;
};
