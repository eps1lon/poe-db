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
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemTypes, {
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.BaseItemTypes.hasMany(model, {
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 0,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.ItemVisualEffect, {
      foreignKey: {
        name: 'item_visual_effect_key',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.ItemVisualEffect.hasMany(model, {
      foreignKey: {
        name: 'item_visual_effect_key',
        $col_order: 1,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.ItemVisualIdentity, {
      foreignKey: {
        name: 'item_visual_identity_key1',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.ItemVisualIdentity.hasMany(model, {
      foreignKey: {
        name: 'item_visual_identity_key1',
        $col_order: 2,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.ItemVisualIdentity, {
      foreignKey: {
        name: 'item_visual_identity_key2',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.ItemVisualIdentity.hasMany(model, {
      foreignKey: {
        name: 'item_visual_identity_key2',
        $col_order: 3,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'ItemisedVisualEffect.dat';
  return model;
};
