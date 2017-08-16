module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ComponentAttributeRequirement',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: true,
        $col_order: -1,
      },
      req_str: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      req_dex: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      req_int: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
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
              attribute: 'base_item_types_key',
              length: 250,
            },
          ],
          name: 'index_base_item_types_key',
        },
      ],
      tableName: 'component_attribute_requirements',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemType, {
      as: 'base_item_type',
      $inverse: 'component_attribute_requirements',
      $col_order: 0,
      foreignKey: {
        name: 'base_item_types_key',
        $type: 'ref|string',
        $col_order: 0,
      },
      targetKey: 'id',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ComponentAttributeRequirements.dat';
  return model;
};
