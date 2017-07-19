module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DamageParticleEffect',
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
        allowNull: false,
        $col_order: 0,
      },
      p_e_t_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'damage_particle_effects',
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'DamageParticleEffects.dat';
  return model;
};
