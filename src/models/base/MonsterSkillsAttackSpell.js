module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterSkillsAttackSpell',
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
      tableName: 'monster_skills_attack_spells',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'MonsterSkillsAttackSpell.dat';
  return model;
};
