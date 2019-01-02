module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'SkillSurgeEffect',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unknown0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      flag2: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      misc_animated: {
        type: DataTypes.BIGINT.UNSIGNED,
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
              attribute: 'granted_effects_key',
            },
          ],
          name: 'index_granted_effects_key',
        },
      ],
      tableName: 'skill_surge_effects',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.GrantedEffect, {
      as: 'granted_effect',
      $inverse: 'skill_surge_effects',
      $col_order: 0,
      foreignKey: {
        name: 'granted_effects_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'SkillSurgeEffects.dat';
  return model;
};
