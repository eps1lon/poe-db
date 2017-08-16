module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'UniqueChest',
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
        $col_order: 3,
      },
      spawn_weight: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      data1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      ao_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      data2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      _mods_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
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
              attribute: 'words_key',
            },
          ],
          name: 'index_words_key',
        },
        {
          fields: [
            {
              attribute: 'flavour_text_key',
            },
          ],
          name: 'index_flavour_text_key',
        },
        {
          fields: [
            {
              attribute: 'appearance_chests_key',
            },
          ],
          name: 'index_appearance_chests_key',
        },
        {
          fields: [
            {
              attribute: 'chests_key',
            },
          ],
          name: 'index_chests_key',
        },
      ],
      tableName: 'unique_chests',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Word, {
      as: 'word',
      $inverse: 'unique_chests',
      $col_order: 1,
      foreignKey: {
        name: 'words_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.FlavourText, {
      as: 'flavour_text',
      $inverse: 'unique_chests',
      $col_order: 2,
      foreignKey: {
        name: 'flavour_text_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Chest, {
      as: 'appearance_chest',
      $inverse: 'unique_chests',
      $col_order: 10,
      foreignKey: {
        name: 'appearance_chests_key',
        $type: 'ulong',
        $col_order: 10,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Chest, {
      as: 'chest',
      $inverse: 'unique_chests',
      $col_order: 11,
      foreignKey: {
        name: 'chests_key',
        $type: 'ulong',
        $col_order: 11,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mod, {
      as: 'mods',
      through: {
        model: models.UniqueChestHabtmMod,
        unique: false,
      },
      foreignKey: 'unique_chest_row',
      otherKey: 'mod_row',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'UniqueChests.dat';
  return model;
};
