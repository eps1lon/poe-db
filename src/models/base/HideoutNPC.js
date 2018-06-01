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
              attribute: 'regular_np_cs_key',
            },
          ],
          name: 'index_regular_np_cs_key',
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
    model.belongsTo(models.NPC, {
      as: 'regular_npc',
      $inverse: 'hideout_np_cs',
      $col_order: 1,
      foreignKey: {
        name: 'regular_np_cs_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'HideoutNPCs.dat';
  return model;
};
