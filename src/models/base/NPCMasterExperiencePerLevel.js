module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'NPCMasterExperiencePerLevel',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: true,
        $col_order: -1,
      },
      master_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      experience: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      item_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      unknown5: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      unknown6: {
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
              attribute: 'npc_master_key',
            },
          ],
          name: 'index_npc_master_key',
        },
      ],
      tableName: 'n_p_c_master_experience_per_levels',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.NPCMaster, {
      as: 'npc_master',
      $inverse: 'npc_master_experience_per_levels',
      $col_order: 0,
      foreignKey: {
        name: 'npc_master_key',
        $type: 'long',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'NPCMasterExperiencePerLevel.dat';
  return model;
};
