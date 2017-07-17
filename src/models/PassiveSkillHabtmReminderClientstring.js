module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'PassiveSkillHabtmReminderClientstring',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['passive_skill_row', 'client_string_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'passive_skill_habtm_reminder_clientstrings',
    },
  );

  model.associate = models => {
    model.belongsTo(models.PassiveSkill, {
      foreignKey: 'passive_skill_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ClientString, {
      foreignKey: 'client_string_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
