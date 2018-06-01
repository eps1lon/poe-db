module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'UITalkText',
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
      ogg_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      flag0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
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
              attribute: 'ui_talk_categories_key',
            },
          ],
          name: 'index_ui_talk_categories_key',
        },
      ],
      tableName: 'u_i_talk_texts',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.UITalkCategory, {
      as: 'ui_talk_category',
      $inverse: 'ui_talk_texts',
      $col_order: 1,
      foreignKey: {
        name: 'ui_talk_categories_key',
        $type: 'int',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'UITalkText.dat';
  return model;
};
