module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'HideoutNPCHabtmRegularNpc',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        $col_order: -1,
      },
      priority: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        $col_order: -1,
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
              attribute: 'hideout_npc_row',
            },
            {
              attribute: 'npc_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'hideout_n_p_c__regular__n_p_cs',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.HideoutNPC, {
      foreignKey: 'hideout_npc_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPC, {
      foreignKey: 'npc_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
