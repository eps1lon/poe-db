module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MapHabtmMonsterPack',
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
      indexes: [
        {
          fields: ['map_row', 'monster_pack_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'map_habtm_monster_packs',
    },
  );

  model.associate = models => {
    model.belongsTo(models.Map, {
      foreignKey: 'map_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterPack, {
      foreignKey: 'monster_pack_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
