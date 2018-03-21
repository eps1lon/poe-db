module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DefaultMonsterStat',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      display_level: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      damage: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      evasion: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      accuracy: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      life: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      experience: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      ally_life: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      damage2: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      unknown2: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      unknown3: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      unknown4: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'default_monster_stats',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'DefaultMonsterStats.dat';
  return model;
};
