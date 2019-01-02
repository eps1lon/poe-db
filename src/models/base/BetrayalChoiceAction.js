module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BetrayalChoiceAction',
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
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'betrayal_choices_key',
            },
          ],
          name: 'index_betrayal_choices_key',
        },
        {
          fields: [
            {
              attribute: 'client_strings_key',
            },
          ],
          name: 'index_client_strings_key',
        },
      ],
      tableName: 'betrayal_choice_actions',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BetrayalChoice, {
      as: 'betrayal_choice',
      $inverse: 'betrayal_choice_actions',
      $col_order: 1,
      foreignKey: {
        name: 'betrayal_choices_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ClientString, {
      as: 'client_string',
      $inverse: 'betrayal_choice_actions',
      $col_order: 2,
      foreignKey: {
        name: 'client_strings_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'BetrayalChoiceActions.dat';
  return model;
};
