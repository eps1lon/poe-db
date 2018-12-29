module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BetrayalUpgrade',
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
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      art_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      unknown7: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      key2: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      unknown11: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      key3: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
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
              attribute: 'mods_key',
            },
          ],
          name: 'index_mods_key',
        },
        {
          fields: [
            {
              attribute: 'betrayal_upgrade_slots_key',
            },
          ],
          name: 'index_betrayal_upgrade_slots_key',
        },
        {
          fields: [
            {
              attribute: 'item_visual_identity_key0',
            },
          ],
          name: 'index_item_visual_identity_key0',
        },
        {
          fields: [
            {
              attribute: 'item_visual_identity_key1',
            },
          ],
          name: 'index_item_visual_identity_key1',
        },
      ],
      tableName: 'betrayal_upgrades',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Mod, {
      as: 'mod',
      $inverse: 'betrayal_upgrades',
      $col_order: 3,
      foreignKey: {
        name: 'mods_key',
        $type: 'ref|list|ulong',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BetrayalUpgradeSlot, {
      as: 'betrayal_upgrade_slot',
      $inverse: 'betrayal_upgrades',
      $col_order: 5,
      foreignKey: {
        name: 'betrayal_upgrade_slots_key',
        $type: 'int',
        $col_order: 5,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemVisualIdentity, {
      as: 'item_visual_identity0',
      $inverse: 'betrayal_upgrades0',
      $col_order: 7,
      foreignKey: {
        name: 'item_visual_identity_key0',
        $type: 'ulong',
        $col_order: 7,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemVisualIdentity, {
      as: 'item_visual_identity1',
      $inverse: 'betrayal_upgrades1',
      $col_order: 8,
      foreignKey: {
        name: 'item_visual_identity_key1',
        $type: 'ulong',
        $col_order: 8,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'BetrayalUpgrades.dat';
  return model;
};
