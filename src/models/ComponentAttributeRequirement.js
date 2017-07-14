module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ComponentAttributeRequirement',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      req_str: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      req_dex: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      req_int: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
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
              attribute: 'base_item_types_key',
              length: 255,
            },
          ],
        },
      ],
      tableName: 'component_attribute_requirements',
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemType, {
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 0,
        $type: 'ref|string',
      },
      targetKey: 'id',
      nullable: true,
      constraints: false,
    });
    models.BaseItemType.hasMany(model, {
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 0,
        $type: 'ref|string',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'id',
    });
  };

  model.DAT_FILE = 'ComponentAttributeRequirements.dat';
  return model;
};
