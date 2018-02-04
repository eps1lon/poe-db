module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'PassiveSkillStatCategory',
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
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'passive_skill_stat_categories',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'PassiveSkillStatCategories.dat';
  return model;
};
