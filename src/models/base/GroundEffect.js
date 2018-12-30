module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'GroundEffect',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 0,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      _misc_objects_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
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
              attribute: 'ground_effect_types_key',
            },
          ],
          name: 'index_ground_effect_types_key',
        },
      ],
      tableName: 'ground_effects',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.GroundEffectType, {
      as: 'ground_effect_type',
      $inverse: 'ground_effects',
      $col_order: 1,
      foreignKey: {
        name: 'ground_effect_types_key',
        $type: 'int',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.MiscObject, {
      as: 'misc_objects',
      through: {
        model: models.GroundEffectHabtmMiscObject,
        unique: false,
      },
      foreignKey: 'ground_effect_row',
      otherKey: 'misc_object_row',
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'GroundEffects.dat';
  return model;
};
