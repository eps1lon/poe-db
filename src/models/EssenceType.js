module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'EssenceType',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      essence_type: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      is_corrupted_essence: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['words_key'],
        },
      ],
    },
  );

  model.associate = models => {
    model.belongsTo(models.Words, {
      foreignKey: {
        name: 'words_key',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Words.hasMany(model, {
      foreignKey: {
        name: 'words_key',
        $col_order: 3,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'EssenceType.dat';
  return model;
};
