const path = require('path');

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Essences',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
      unknown1: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      unknown2: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      unknown3: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      unknown4: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      unknown5: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      unknown6: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      unknown7: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      unknown8: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      unknown9: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      unknown10: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      unknown11: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
      },
      unknown23: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      drop_level_minimum: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      drop_level_maximum: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      tier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      unknown31: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      item_level_restriction: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      },
      is_screaming_essence: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemTypes, {
      foreignKey: 'base_item_types_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'mods_key1',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'mods_key2',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'quiver_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'amulet1_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'belt1_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'belt3_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'gloves1_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'boots1_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'body_armour1_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'helmet1_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'shield1_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.EssenceType, {
      foreignKey: 'essence_type_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: '1_hand_mods_key1',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'mods_key13',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'mods_key14',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'mods_key15',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: '2_hand_mods_key1',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'boots3_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'ranged_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'helmet2_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'body_armour2_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'boots2_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'gloves2_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'bow_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'wand_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: '2_hand_mods_key2',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: '2_hand_mods_key3',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: '2_hand_mods_key4',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: '2_hand_mods_key5',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: '1_hand_mods_key2',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: '1_hand_mods_key3',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: '1_hand_mods_key4',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: '1_hand_mods_key5',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: '1_hand_mods_key6',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: '1_hand_mods_key7',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: '1_hand_mods_key8',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: '1_hand_mods_key9',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'belt2_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'amulet2_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'ring_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'mods_key41',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'shield2_mods_key',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: 'mods_key43',
      target: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.Mods, {
      as: 'monster_mods',
      through: 'MonsterMods',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Essences.dat';
  return model;
};
