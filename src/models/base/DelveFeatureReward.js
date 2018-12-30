module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DelveFeatureReward',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      delve_rewards_key: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
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
              attribute: 'delve_features_key',
            },
          ],
          name: 'index_delve_features_key',
        },
      ],
      tableName: 'delve_feature_rewards',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.DelveFeature, {
      as: 'delve_feature',
      $inverse: 'delve_feature_rewards',
      $col_order: 0,
      foreignKey: {
        name: 'delve_features_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DelveFeatureRewards.dat';
  return model;
};
