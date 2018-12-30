module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Projectile',
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
      ao_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      loop_animation_ids: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      impact_animation_ids: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      projectile_speed: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      unknown5: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      flag2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      inherits_from: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      unknown7: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'projectiles',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'Projectiles.dat';
  return model;
};
