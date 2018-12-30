module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterSkillsHull',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'monster_skills_hulls',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'MonsterSkillsHull.dat';
  return model;
};
