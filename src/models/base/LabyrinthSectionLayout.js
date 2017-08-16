module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthSectionLayout',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      float0: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      float1: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      _labyrinth_section_layout_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 2,
      },
      _labyrinth_node_overrides_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 8,
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
              attribute: 'labyrinth_section_key',
            },
          ],
          name: 'index_labyrinth_section_key',
        },
        {
          fields: [
            {
              attribute: 'labyrinth_secrets_key0',
            },
          ],
          name: 'index_labyrinth_secrets_key0',
        },
        {
          fields: [
            {
              attribute: 'labyrinth_secrets_key1',
            },
          ],
          name: 'index_labyrinth_secrets_key1',
        },
        {
          fields: [
            {
              attribute: 'labyrinth_areas_key',
            },
          ],
          name: 'index_labyrinth_areas_key',
        },
      ],
      tableName: 'labyrinth_section_layouts',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.LabyrinthSection, {
      as: 'labyrinth_section',
      $inverse: 'labyrinth_section_layouts',
      $col_order: 0,
      foreignKey: {
        name: 'labyrinth_section_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.LabyrinthSecret, {
      as: 'labyrinth_secrets0',
      $inverse: 'labyrinth_section_layouts0',
      $col_order: 3,
      foreignKey: {
        name: 'labyrinth_secrets_key0',
        $type: 'ulong',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.LabyrinthSecret, {
      as: 'labyrinth_secrets1',
      $inverse: 'labyrinth_section_layouts1',
      $col_order: 4,
      foreignKey: {
        name: 'labyrinth_secrets_key1',
        $type: 'ulong',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.LabyrinthArea, {
      as: 'labyrinth_area',
      $inverse: 'labyrinth_section_layouts',
      $col_order: 5,
      foreignKey: {
        name: 'labyrinth_areas_key',
        $type: 'ulong',
        $col_order: 5,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.LabyrinthSectionLayout, {
      as: 'labyrinth_section_layout',
      through: {
        model: models.LabyrinthSectionLayoutHabtmLabyrinthSectionLayout,
        unique: false,
      },
      foreignKey: 'source_row',
      otherKey: 'target_row',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.LabyrinthNodeOverride, {
      as: 'labyrinth_node_overrides',
      through: {
        model: models.LabyrinthSectionLayoutHabtmLabyrinthNodeOverride,
        unique: false,
      },
      foreignKey: 'labyrinth_section_layout_row',
      otherKey: 'labyrinth_node_override_row',
      $col_order: 8,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'LabyrinthSectionLayout.dat';
  return model;
};
