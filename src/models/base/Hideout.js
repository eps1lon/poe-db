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
        allowNull: false,
        $col_order: 0,
      },
      unknown9: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
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
              attribute: 'small_world_areas_key',
            },
          ],
          name: 'index_small_world_areas_key',
        },
        {
          fields: [
            {
              attribute: 'n_p_c_master_key',
            },
          ],
          name: 'index_n_p_c_master_key',
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
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldArea, {
      foreignKey: {
        name: 'small_world_areas_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPCMaster, {
      foreignKey: {
        name: 'n_p_c_master_key',
        $col_order: 2,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldArea, {
      foreignKey: {
        name: 'medium_world_areas_key',
        $col_order: 3,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.WorldArea, {
      foreignKey: {
        name: 'large_world_areas_key',
        $col_order: 4,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Hideouts.dat';
  return model;
};
