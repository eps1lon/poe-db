module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BuffVisualHabtmMiscAnimated2',
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
              attribute: 'buff_visual_row',
            },
            {
              attribute: 'misc_animated_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'buff_visual__misc_animated2s',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BuffVisual, {
      foreignKey: 'buff_visual_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MiscAnimated, {
      foreignKey: 'misc_animated_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
