module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'WordHabtmSpawnWeightTag',
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
          fields: ['word_row', 'tag_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'word_habtm_spawn_weight_tags',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Word, {
      foreignKey: 'word_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Tag, {
      foreignKey: 'tag_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
