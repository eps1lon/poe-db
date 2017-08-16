module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'GrantedEffect',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: true,
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
      support_gem_letter: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      data2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      unknown1: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      unknown2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      cast_time: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      flag2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 14,
      },
      flag3: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 15,
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
      $col_order: 13,
      foreignKey: {
        name: 'active_skills_key',
        $type: 'ulong',
        $col_order: 13,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'GrantedEffects.dat';
  return model;
};
