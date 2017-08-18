module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'PassiveSkillHabtmReminderClientstring',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        $col_order: -1,
      },
      priority: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        $col_order: -1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'passive_skill_row',
            },
            {
              attribute: 'client_string_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'passive_skill__reminder__client_strings',
      underscored: true,
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
