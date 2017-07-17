module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthSectionLayoutLabyrinthSectionLayout',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'labyrinth_section_layout_labyrinth_section_layouts',
    },
  );

  model.associate = models => {
    model.belongsTo(models.LabyrinthSectionLayout, {
      foreignKey: 'source_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.LabyrinthSectionLayout, {
      foreignKey: 'target_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
