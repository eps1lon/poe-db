module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'InvasionMonsterGroup',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'invasion_monster_groups',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'InvasionMonsterGroups.dat';
  return model;
};
