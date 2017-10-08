module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'GrantedEffect',
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
      is_support: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      data0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      multiplier1: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      multiplier2: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      support_gem_letter: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      data2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      unknown1: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      unknown2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
      },
      cast_time: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 14,
      },
      flag2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 16,
      },
      flag3: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 17,
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
              attribute: 'active_skills_key',
            },
          ],
          name: 'index_active_skills_key',
        },
      ],
      tableName: 'granted_effects',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.ActiveSkill, {
      as: 'active_skill',
      $inverse: 'granted_effects',
      $col_order: 15,
      foreignKey: {
        name: 'active_skills_key',
        $type: 'ulong',
        $col_order: 15,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });

    model.hasMany(models.GrantedEffectsPerLevel, {
      as: 'granted_effects_per_levels',
      $inverse: 'granted_effect',
      foreignKey: {
        name: 'granted_effects_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'granted_effects_key',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'GrantedEffects.dat';
  return model;
};
