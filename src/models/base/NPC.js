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
      unknown0: {
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
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      _npc_audio1_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 8,
      },
      _npc_audio2_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 9,
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
      $col_order: 7,
      foreignKey: {
        name: 'npc_shop_key',
        $type: 'ulong',
        $col_order: 7,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.NPCAudio, {
      as: 'npc_audio1',
      through: {
        model: models.NPCHabtmNPCAudio1,
        unique: false,
      },
      foreignKey: 'npc_row',
      otherKey: 'npc_audio_row',
      $col_order: 8,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.NPCAudio, {
      as: 'npc_audio2',
      through: {
        model: models.NPCHabtmNPCAudio2,
        unique: false,
      },
      foreignKey: 'npc_row',
      otherKey: 'npc_audio_row',
      $col_order: 9,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'NPCs.dat';
  return model;
};
