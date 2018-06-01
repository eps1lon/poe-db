module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'IncursionBracket',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      data0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      unknown0: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
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
              attribute: 'incursion_world_areas_key',
            },
          ],
          name: 'index_incursion_world_areas_key',
        },
        {
          fields: [
            {
              attribute: 'template_world_areas_key',
            },
          ],
          name: 'index_template_world_areas_key',
        },
      ],
      tableName: 'incursion_brackets',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldArea, {
      as: 'incursion_world_area',
      $inverse: 'incursion_brackets',
      $col_order: 1,
      foreignKey: {
        name: 'incursion_world_areas_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldArea, {
      as: 'template_world_area',
      $inverse: 'incursion_brackets',
      $col_order: 2,
      foreignKey: {
        name: 'template_world_areas_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'IncursionBrackets.dat';
  return model;
};
