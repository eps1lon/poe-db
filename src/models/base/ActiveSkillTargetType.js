module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ActiveSkillTargetType',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'active_skill_target_types',
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'ActiveSkillTargetTypes.dat';
  return model;
};
