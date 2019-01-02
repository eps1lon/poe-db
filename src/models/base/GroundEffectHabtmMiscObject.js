module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'GroundEffectHabtmMiscObject',
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
              attribute: 'ground_effect_row',
            },
            {
              attribute: 'misc_object_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'ground_effect__misc_objects',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.GroundEffect, {
      foreignKey: 'ground_effect_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MiscObject, {
      foreignKey: 'misc_object_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};