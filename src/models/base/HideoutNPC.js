module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'HideoutNPC',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      _regular_np_cs_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 1,
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
              attribute: 'hideout_np_cs_key',
            },
          ],
          name: 'index_hideout_np_cs_key',
        },
        {
          fields: [
            {
              attribute: 'hideout_doodads_key',
            },
          ],
          name: 'index_hideout_doodads_key',
        },
        {
          fields: [
            {
              attribute: 'npc_master_key',
            },
          ],
          name: 'index_npc_master_key',
        },
      ],
      tableName: 'hideout_n_p_cs',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.NPC, {
      as: 'hideout_npc',
      $inverse: 'hideout_np_cs',
      $col_order: 0,
      foreignKey: {
        name: 'hideout_np_cs_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.HideoutDoodad, {
      as: 'hideout_doodad',
      $inverse: 'hideout_np_cs',
      $col_order: 2,
      foreignKey: {
        name: 'hideout_doodads_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPCMaster, {
      as: 'npc_master',
      $inverse: 'hideout_np_cs',
      $col_order: 3,
      foreignKey: {
        name: 'npc_master_key',
        $type: 'int',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.NPC, {
      as: 'regular_np_cs',
      through: {
        model: models.HideoutNPCHabtmRegularNpc,
        unique: false,
      },
      foreignKey: 'hideout_npc_row',
      otherKey: 'npc_row',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'HideoutNPCs.dat';
  return model;
};
