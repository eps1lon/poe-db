module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'UniqueStashLayout',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unique_items_key: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      key3: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
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
              attribute: 'unique_stash_types_key',
            },
          ],
          name: 'index_unique_stash_types_key',
        },
      ],
      tableName: 'unique_stash_layouts',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.ItemVisualIdentity, {
      as: 'item_visual_identity',
      $inverse: 'unique_stash_layouts',
      $col_order: 1,
      foreignKey: {
        name: 'item_visual_identity_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.UniqueStashType, {
      as: 'unique_stash_type',
      $inverse: 'unique_stash_layouts',
      $col_order: 2,
      foreignKey: {
        name: 'unique_stash_types_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'UniqueStashLayout.dat';
  return model;
};
