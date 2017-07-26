module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'TalismanPackHabtmMonsterPack',
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
          fields: ['talisman_pack_row', 'monster_pack_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'talisman_pack_habtm_monster_packs',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.TalismanPack, {
      foreignKey: 'talisman_pack_row',
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
