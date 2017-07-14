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
          fields: ['labyrinth_section_key'],
        },
        {
          fields: ['labyrinth_secrets_key0'],
        },
        {
          fields: ['labyrinth_secrets_key1'],
        },
        {
          fields: ['labyrinth_areas_key'],
        },
        {
          fields: ['labyrinth_node_overrides_key'],
        },
      ],
    },
  );

  model.associate = models => {
    model.belongsTo(models.LabyrinthSection, {
      foreignKey: {
        name: 'labyrinth_section_key',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.LabyrinthSection.hasMany(model, {
      foreignKey: {
        name: 'labyrinth_section_key',
        $col_order: 0,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.LabyrinthSecret, {
      foreignKey: {
        name: 'labyrinth_secrets_key0',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.LabyrinthSecret.hasMany(model, {
      foreignKey: {
        name: 'labyrinth_secrets_key0',
        $col_order: 3,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.LabyrinthSecret, {
      foreignKey: {
        name: 'labyrinth_secrets_key1',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.LabyrinthSecret.hasMany(model, {
      foreignKey: {
        name: 'labyrinth_secrets_key1',
        $col_order: 4,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.LabyrinthArea, {
      foreignKey: {
        name: 'labyrinth_areas_key',
        $col_order: 5,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.LabyrinthArea.hasMany(model, {
      foreignKey: {
        name: 'labyrinth_areas_key',
        $col_order: 5,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.LabyrinthNodeOverride, {
      foreignKey: {
        name: 'labyrinth_node_overrides_key',
        $col_order: 8,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.LabyrinthNodeOverride.hasMany(model, {
      foreignKey: {
        name: 'labyrinth_node_overrides_key',
        $col_order: 8,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.LabyrinthSectionLayout, {
      as: 'labyrinth_section_layout',
      through: 'LabyrinthSectionLayoutLabyrinthSectionLayout',
      $col_order: 2,
      foreignKey: 'source_row',
      targetKey: 'target_row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'LabyrinthSectionLayout.dat';
  return model;
};
