module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Archetype',
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
        allowNull: true,
        $col_order: 0,
      },
      passive_skill_tree_url: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      ascendancy_class_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      ui_image_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      tutorial_video_bk_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      unknown1: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      unknown2: {
        type: DataTypes.FLOAT,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      background_image_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'characters_key',
            },
          ],
          name: 'index_characters_key',
        },
      ],
      tableName: 'archetypes',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Character, {
      as: 'character',
      $inverse: 'archetypes',
      $col_order: 1,
      foreignKey: {
        name: 'characters_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Archetypes.dat';
  return model;
};
