module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'AtlasInfluenceOutcome',
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
      unknown1: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      unknown3: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      unknown4: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      key0: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      _mods_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        $col_order: 6,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'atlas_influence_outcomes',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsToMany(models.Mod, {
      as: 'mods',
      through: {
        model: models.AtlasInfluenceOutcomeHabtmMod,
        unique: false,
      },
      foreignKey: 'atlas_influence_outcome_row',
      otherKey: 'mod_row',
      $col_order: 6,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'AtlasInfluenceOutcomes.dat';
  return model;
};
