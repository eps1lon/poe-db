module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'SkillGemInfo',
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
      description: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      video_url1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      video_url2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
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
              attribute: 'skill_gems_key',
            },
          ],
          name: 'index_skill_gems_key',
        },
      ],
      tableName: 'skill_gem_infos',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.SkillGem, {
      as: 'skill_gem',
      $inverse: 'skill_gem_infos',
      $col_order: 3,
      foreignKey: {
        name: 'skill_gems_key',
        $type: 'ulong',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'SkillGemInfo.dat';
  return model;
};
