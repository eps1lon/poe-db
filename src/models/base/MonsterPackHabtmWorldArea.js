module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterPackHabtmWorldArea',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['monster_pack_row', 'world_area_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'monster_pack_habtm_world_areas',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterPack, {
      foreignKey: 'monster_pack_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldArea, {
      foreignKey: 'world_area_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
