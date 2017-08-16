module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'AreaTransitionAnimation',
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
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
      bow_animation: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 2,
      },
      unknown3: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      two_hand_sword_animation: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 4,
      },
      two_hand_mace_animation: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      unknown6: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      sword_and_dagger_animation: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      dagger_and_sword_animation: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 8,
      },
      dagger_and_dagger_animation: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      sword_and_sword_animation: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      unknown11: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      unknown12: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      claw_and_claw_animation: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
      },
      claw_and_dagger_animation: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 14,
      },
      claw_and_dagger_animation2: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 15,
      },
      claw_and_shield_animation: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 16,
      },
      dagger_and_claw_animation: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 17,
      },
      dagger_and_shield_animation: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 18,
      },
      sword_and_claw_animation: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 19,
      },
      sword_and_shield_animation: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 20,
      },
      staff_animation: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 21,
      },
      unknown22: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 22,
      },
      unknown23: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 23,
      },
      wand_and_shield_animation: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 24,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'area_transition_animations',
      underscored: true,
    },
  );

  model.associate = models => {};

  model.DAT_FILE = 'AreaTransitionAnimations.dat';
  return model;
};
