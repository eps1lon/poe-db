module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Quest',
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
      act: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      quest_state: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      icon_dds_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      quest_id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      unknown6: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      is_quest: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      unknown8: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      unknown9: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      unknown11: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      flag2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
      },
      flag3: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 14,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'quests',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'Quest.dat';
  return model;
};
