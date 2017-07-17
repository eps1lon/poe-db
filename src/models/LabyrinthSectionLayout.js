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
        },
        {
          fields: [
            {
              attribute: 'labyrinth_secrets_key0',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'labyrinth_secrets_key1',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'labyrinth_areas_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'labyrinth_node_overrides_key',
            },
          ],
        },
      ],
      tableName: 'labyrinth_section_layouts',
    },
  );

  model.associate = models => {
    model.belongsTo(models.LabyrinthSection, {
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
      through: models.LabyrinthSectionLayoutLabyrinthSectionLayout,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'LabyrinthSectionLayout.dat';
  return model;
};
