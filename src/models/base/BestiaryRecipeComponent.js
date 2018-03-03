module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BestiaryRecipeComponent',
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
      min_level: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      key3: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      unknown9: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
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
              attribute: 'bestiary_families_key',
            },
          ],
          name: 'index_bestiary_families_key',
        },
        {
          fields: [
            {
              attribute: 'bestiary_groups_key',
            },
          ],
          name: 'index_bestiary_groups_key',
        },
        {
          fields: [
            {
              attribute: 'mods_key',
            },
          ],
          name: 'index_mods_key',
        },
        {
          fields: [
            {
              attribute: 'bestiary_genus_key',
            },
          ],
          name: 'index_bestiary_genus_key',
        },
      ],
      tableName: 'bestiary_recipe_components',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BestiaryFamily, {
      as: 'bestiary_family',
      $inverse: 'bestiary_recipe_components',
      $col_order: 2,
      foreignKey: {
        name: 'bestiary_families_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BestiaryGroup, {
      as: 'bestiary_group',
      $inverse: 'bestiary_recipe_components',
      $col_order: 3,
      foreignKey: {
        name: 'bestiary_groups_key',
        $type: 'ulong',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mod, {
      as: 'mod',
      $inverse: 'bestiary_recipe_components',
      $col_order: 4,
      foreignKey: {
        name: 'mods_key',
        $type: 'ulong',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BestiaryGenu, {
      as: 'bestiary_genu',
      $inverse: 'bestiary_recipe_components',
      $col_order: 7,
      foreignKey: {
        name: 'bestiary_genus_key',
        $type: 'ulong',
        $col_order: 7,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'BestiaryRecipeComponent.dat';
  return model;
};
