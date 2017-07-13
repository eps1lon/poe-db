module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Ascendancy',
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
      class_no: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      coordinate_rect: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      rgb_flavour_text_colour: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      flavour_text: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      ogg_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {
    model.belongsTo(models.Characters, {
      foreignKey: {
        name: 'characters_key',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.Characters.hasMany(model, {
      foreignKey: {
        name: 'characters_key',
        $col_order: 2,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'Ascendancy.dat';
  return model;
};
