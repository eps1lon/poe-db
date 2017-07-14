module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'NPC',
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
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      metadata: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      unknown5: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      short_name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      unknown7: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      unknown8: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
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
              attribute: 'npc_master_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'npc_shop_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'npc_audio_key1',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'npc_audio_key2',
            },
          ],
        },
      ],
      tableName: 'n_p_cs',
    },
  );

  model.associate = models => {
    model.belongsTo(models.NPCMaster, {
      foreignKey: {
        name: 'npc_master_key',
        $col_order: 4,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.NPCMaster.hasMany(model, {
      foreignKey: {
        name: 'npc_master_key',
        $col_order: 4,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.NPCShop, {
      foreignKey: {
        name: 'npc_shop_key',
        $col_order: 8,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.NPCShop.hasMany(model, {
      foreignKey: {
        name: 'npc_shop_key',
        $col_order: 8,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.NPCAudio, {
      foreignKey: {
        name: 'npc_audio_key1',
        $col_order: 9,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.NPCAudio.hasMany(model, {
      foreignKey: {
        name: 'npc_audio_key1',
        $col_order: 9,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.NPCAudio, {
      foreignKey: {
        name: 'npc_audio_key2',
        $col_order: 10,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.NPCAudio.hasMany(model, {
      foreignKey: {
        name: 'npc_audio_key2',
        $col_order: 10,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'NPCs.dat';
  return model;
};
