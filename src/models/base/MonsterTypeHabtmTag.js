module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterTypeHabtmTag',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        $col_order: -1,
      },
      priority: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        $col_order: -1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['monster_type_row', 'tag_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'monster_type_habtm_tags',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterType, {
      foreignKey: 'monster_type_row',
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
