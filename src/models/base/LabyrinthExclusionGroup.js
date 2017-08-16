module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthExclusionGroup',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'labyrinth_exclusion_groups',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'LabyrinthExclusionGroups.dat';
  return model;
};
