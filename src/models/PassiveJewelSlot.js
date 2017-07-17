module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'PassiveJewelSlot',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
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
              attribute: 'passive_skills_key',
            },
          ],
          name: 'index_passive_skills_key',
        },
      ],
      tableName: 'passive_jewel_slots',
    },
  );

  model.associate = models => {
    model.belongsTo(models.PassiveSkill, {
      foreignKey: {
        name: 'passive_skills_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'PassiveJewelSlots.dat';
  return model;
};
