module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'HideoutDoodad',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      variation__a_o_files: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      favour_cost: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      master_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      is_non_master_doodad: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
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
              attribute: 'n_p_c_master_key',
            },
          ],
          name: 'index_n_p_c_master_key',
        },
      ],
      tableName: 'hideout_doodads',
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
    model.belongsTo(models.NPCMaster, {
      as: 'n_p_c_master',
      foreignKey: {
        name: 'n_p_c_master_key',
        $col_order: 4,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'HideoutDoodads.dat';
  return model;
};
