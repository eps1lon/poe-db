module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Hideout',
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
      unknown9: {
        type: DataTypes.INTEGER,
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
              attribute: 'small_world_areas_key',
            },
          ],
          name: 'index_small_world_areas_key',
        },
        {
          fields: [
            {
              attribute: 'npc_master_key',
            },
          ],
          name: 'index_npc_master_key',
        },
        {
          fields: [
            {
              attribute: 'medium_world_areas_key',
            },
          ],
          name: 'index_medium_world_areas_key',
        },
        {
          fields: [
            {
              attribute: 'large_world_areas_key',
            },
          ],
          name: 'index_large_world_areas_key',
        },
      ],
      tableName: 'hideouts',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldArea, {
      as: 'small_world_area',
      $inverse: 'hideouts',
      $col_order: 1,
      foreignKey: {
        name: 'small_world_areas_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPCMaster, {
      as: 'npc_master',
      $inverse: 'hideouts',
      $col_order: 2,
      foreignKey: {
        name: 'npc_master_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldArea, {
      as: 'medium_world_area',
      $inverse: 'hideouts',
      $col_order: 3,
      foreignKey: {
        name: 'medium_world_areas_key',
        $type: 'ulong',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldArea, {
      as: 'large_world_area',
      $inverse: 'hideouts',
      $col_order: 4,
      foreignKey: {
        name: 'large_world_areas_key',
        $type: 'ulong',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Hideouts.dat';
  return model;
};
