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
        allowNull: false,
        $col_order: 1,
      },
      flags1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      flags2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
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
        {
          fields: [
            {
              attribute: 'labyrinth_node_overrides_key',
            },
          ],
          name: 'index_labyrinth_node_overrides_key',
        },
      ],
      tableName: 'labyrinth_section_layouts',
    },
  );

  model.associate = models => {
    model.belongsTo(models.LabyrinthSection, {
      as: 'labyrinth_section',
      foreignKey: {
        name: 'labyrinth_section_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.LabyrinthSecret, {
      as: 'labyrinth_secrets0',
      foreignKey: {
        name: 'labyrinth_secrets_key0',
        $col_order: 3,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.LabyrinthSecret, {
      as: 'labyrinth_secrets1',
      foreignKey: {
        name: 'labyrinth_secrets_key1',
        $col_order: 4,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.LabyrinthArea, {
      as: 'labyrinth_area',
      foreignKey: {
        name: 'labyrinth_areas_key',
        $col_order: 5,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.LabyrinthNodeOverride, {
      as: 'labyrinth_node_override',
      foreignKey: {
        name: 'labyrinth_node_overrides_key',
        $col_order: 8,
        $type: 'ulong',
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
  };

  model.DAT_FILE = 'LabyrinthSectionLayout.dat';
  return model;
};
