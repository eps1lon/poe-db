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
              attribute: 'n_p_c_master_key',
            },
          ],
          name: 'index_n_p_c_master_key',
        },
        {
          fields: [
            {
              attribute: 'n_p_c_shop_key',
            },
          ],
          name: 'index_n_p_c_shop_key',
        },
        {
          fields: [
            {
              attribute: 'n_p_c_audio_key1',
            },
          ],
          name: 'index_n_p_c_audio_key1',
        },
        {
          fields: [
            {
              attribute: 'n_p_c_audio_key2',
            },
          ],
          name: 'index_n_p_c_audio_key2',
        },
      ],
      tableName: 'n_p_cs',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.NPCMaster, {
      as: 'n_p_c_master',
      $inverse: 'n_p_cs',
      $col_order: 4,
      foreignKey: {
        name: 'n_p_c_master_key',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPCShop, {
      as: 'n_p_c_shop',
      $inverse: 'n_p_cs',
      $col_order: 8,
      foreignKey: {
        name: 'n_p_c_shop_key',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPCAudio, {
      as: 'n_p_c_audio1',
      $inverse: 'n_p_cs1',
      $col_order: 9,
      foreignKey: {
        name: 'n_p_c_audio_key1',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPCAudio, {
      as: 'n_p_c_audio2',
      $inverse: 'n_p_cs2',
      $col_order: 10,
      foreignKey: {
        name: 'n_p_c_audio_key2',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'NPCs.dat';
  return model;
};
