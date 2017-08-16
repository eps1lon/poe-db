module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ActiveSkillType',
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
      tableName: 'active_skill_types',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'ActiveSkillType.dat';
  return model;
};
