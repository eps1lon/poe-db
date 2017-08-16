module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'NPC',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: true,
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
      metadata: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      unknown5: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      short_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      unknown7: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      unknown8: {
        type: DataTypes.INTEGER,
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
              attribute: 'npc_master_key',
            },
          ],
          name: 'index_npc_master_key',
        },
        {
          fields: [
            {
              attribute: 'npc_shop_key',
            },
          ],
          name: 'index_npc_shop_key',
        },
        {
          fields: [
            {
              attribute: 'npc_audio_key1',
            },
          ],
          name: 'index_npc_audio_key1',
        },
        {
          fields: [
            {
              attribute: 'npc_audio_key2',
            },
          ],
          name: 'index_npc_audio_key2',
        },
      ],
      tableName: 'n_p_cs',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.NPCMaster, {
      as: 'npc_master',
      $inverse: 'np_cs',
      $col_order: 4,
      foreignKey: {
        name: 'npc_master_key',
        $type: 'ulong',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPCShop, {
      as: 'npc_shop',
      $inverse: 'np_cs',
      $col_order: 8,
      foreignKey: {
        name: 'npc_shop_key',
        $type: 'ulong',
        $col_order: 8,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPCAudio, {
      as: 'npc_audio1',
      $inverse: 'np_cs1',
      $col_order: 9,
      foreignKey: {
        name: 'npc_audio_key1',
        $type: 'ulong',
        $col_order: 9,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPCAudio, {
      as: 'npc_audio2',
      $inverse: 'np_cs2',
      $col_order: 10,
      foreignKey: {
        name: 'npc_audio_key2',
        $type: 'ulong',
        $col_order: 10,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'NPCs.dat';
  return model;
};
