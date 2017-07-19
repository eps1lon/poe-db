module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'AtlasQuestItem',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      quest_flags: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      league_quest_flags: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      map_tier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'base_item_types_key',
            },
          ],
          name: 'index_base_item_types_key',
        },
        {
          fields: [
            {
              attribute: 'world_areas_key',
            },
          ],
          name: 'index_world_areas_key',
        },
      ],
      tableName: 'atlas_quest_items',
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemType, {
      as: 'base_item_type',
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldArea, {
      as: 'world_area',
      foreignKey: {
        name: 'world_areas_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'AtlasQuestItems.dat';
  return model;
};
