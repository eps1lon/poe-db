module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ItemisedVisualEffect',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      keys0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      keys2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      data3: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      data4: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
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
              attribute: 'base_item_types_key',
            },
          ],
          name: 'index_base_item_types_key',
        },
        {
          fields: [
            {
              attribute: 'item_visual_effect_key',
            },
          ],
          name: 'index_item_visual_effect_key',
        },
        {
          fields: [
            {
              attribute: 'item_visual_identity_key1',
            },
          ],
          name: 'index_item_visual_identity_key1',
        },
        {
          fields: [
            {
              attribute: 'item_visual_identity_key2',
            },
          ],
          name: 'index_item_visual_identity_key2',
        },
      ],
      tableName: 'itemised_visual_effects',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemType, {
      as: 'base_item_type',
      $inverse: 'itemised_visual_effects',
      $col_order: 0,
      foreignKey: {
        name: 'base_item_types_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemVisualEffect, {
      as: 'item_visual_effect',
      $inverse: 'itemised_visual_effects',
      $col_order: 1,
      foreignKey: {
        name: 'item_visual_effect_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemVisualIdentity, {
      as: 'item_visual_identity1',
      $inverse: 'itemised_visual_effects1',
      $col_order: 2,
      foreignKey: {
        name: 'item_visual_identity_key1',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemVisualIdentity, {
      as: 'item_visual_identity2',
      $inverse: 'itemised_visual_effects2',
      $col_order: 3,
      foreignKey: {
        name: 'item_visual_identity_key2',
        $type: 'ulong',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ItemisedVisualEffect.dat';
  return model;
};
