module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BetrayalDialogue',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
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
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 3,
      },
      unknown4: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: true,
        $col_order: 5,
      },
      key2: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: true,
        $col_order: 6,
      },
      keys1: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 7,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 9,
      },
      unknown5: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 10,
      },
      keys0: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 11,
      },
      flag1: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: true,
        $col_order: 12,
      },
      unknown6: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 13,
      },
      unknown7: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 15,
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
              attribute: 'betrayal_dialogue_cue_key',
            },
          ],
          name: 'index_betrayal_dialogue_cue_key',
        },
        {
          fields: [
            {
              attribute: 'betrayal_targets_key',
            },
          ],
          name: 'index_betrayal_targets_key',
        },
        {
          fields: [
            {
              attribute: 'betrayal_upgrades_key',
            },
          ],
          name: 'index_betrayal_upgrades_key',
        },
        {
          fields: [
            {
              attribute: 'npc_text_audio_key',
            },
          ],
          name: 'index_npc_text_audio_key',
        },
      ],
      tableName: 'betrayal_dialogues',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BetrayalDialogueCue, {
      as: 'betrayal_dialogue_cue',
      $inverse: 'betrayal_dialogues',
      $col_order: 0,
      foreignKey: {
        name: 'betrayal_dialogue_cue_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BetrayalTarget, {
      as: 'betrayal_target',
      $inverse: 'betrayal_dialogues',
      $col_order: 4,
      foreignKey: {
        name: 'betrayal_targets_key',
        $type: 'ulong',
        $col_order: 4,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BetrayalUpgrade, {
      as: 'betrayal_upgrade',
      $inverse: 'betrayal_dialogues',
      $col_order: 8,
      foreignKey: {
        name: 'betrayal_upgrades_key',
        $type: 'ulong',
        $col_order: 8,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.NPCTextAudio, {
      as: 'npc_text_audio',
      $inverse: 'betrayal_dialogues',
      $col_order: 14,
      foreignKey: {
        name: 'npc_text_audio_key',
        $type: 'ulong',
        $col_order: 14,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'BetrayalDialogue.dat';
  return model;
};
