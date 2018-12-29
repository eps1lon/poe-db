module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'UniqueMap',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      has_guild_character: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      guild_character: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
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
              attribute: 'item_visual_identity_key',
            },
          ],
          name: 'index_item_visual_identity_key',
        },
        {
          fields: [
            {
              attribute: 'world_areas_key',
            },
          ],
          name: 'index_world_areas_key',
        },
        {
          fields: [
            {
              attribute: 'words_key',
            },
          ],
          name: 'index_words_key',
        },
        {
          fields: [
            {
              attribute: 'flavour_text_key',
            },
          ],
          name: 'index_flavour_text_key',
        },
      ],
      tableName: 'unique_maps',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.ItemVisualIdentity, {
      as: 'item_visual_identity',
      $inverse: 'unique_maps',
      $col_order: 0,
      foreignKey: {
        name: 'item_visual_identity_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldArea, {
      as: 'world_area',
      $inverse: 'unique_maps',
      $col_order: 1,
      foreignKey: {
        name: 'world_areas_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Word, {
      as: 'word',
      $inverse: 'unique_maps',
      $col_order: 2,
      foreignKey: {
        name: 'words_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.FlavourText, {
      as: 'flavour_text',
      $inverse: 'unique_maps',
      $col_order: 3,
      foreignKey: {
        name: 'flavour_text_key',
        $type: 'ulong',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'UniqueMaps.dat';
  return model;
};
