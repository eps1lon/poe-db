module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'ActiveSkillHabtmWeaponRestrictionItemclass',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'active_skill_habtm_weapon_restriction_itemclasses',
    },
  );

  model.associate = models => {
    model.belongsTo(models.ActiveSkill, {
      foreignKey: 'active_skill_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.ItemClass, {
      foreignKey: 'item_class_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
