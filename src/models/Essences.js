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
        $col_order: -1,
      },
      unknown1: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      unknown2: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      unknown3: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      unknown4: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      unknown5: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      unknown6: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 6,
      },
      unknown7: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
      },
      unknown8: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 8,
      },
      unknown9: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 9,
      },
      unknown10: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 10,
      },
      unknown11: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: false,
        allowNull: false,
        $col_order: 11,
      },
      unknown23: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 23,
      },
      drop_level_minimum: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 24,
      },
      drop_level_maximum: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 25,
      },
      tier: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 28,
      },
      unknown31: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 29,
      },
      item_level_restriction: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 55,
      },
      is_screaming_essence: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 62,
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
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'mods_key1',
        $col_order: 12,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'mods_key2',
        $col_order: 13,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'quiver_mods_key',
        $col_order: 14,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'amulet1_mods_key',
        $col_order: 15,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'belt1_mods_key',
        $col_order: 16,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'belt3_mods_key',
        $col_order: 17,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'gloves1_mods_key',
        $col_order: 18,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'boots1_mods_key',
        $col_order: 19,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'body_armour1_mods_key',
        $col_order: 20,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'helmet1_mods_key',
        $col_order: 21,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'shield1_mods_key',
        $col_order: 22,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.EssenceType, {
      foreignKey: {
        name: 'essence_type_key',
        $col_order: 27,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: '1_hand_mods_key1',
        $col_order: 30,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'mods_key13',
        $col_order: 31,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'mods_key14',
        $col_order: 32,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'mods_key15',
        $col_order: 33,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: '2_hand_mods_key1',
        $col_order: 34,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'boots3_mods_key',
        $col_order: 35,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'ranged_mods_key',
        $col_order: 36,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'helmet2_mods_key',
        $col_order: 37,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'body_armour2_mods_key',
        $col_order: 38,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'boots2_mods_key',
        $col_order: 39,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'gloves2_mods_key',
        $col_order: 40,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'bow_mods_key',
        $col_order: 41,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'wand_mods_key',
        $col_order: 42,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: '2_hand_mods_key2',
        $col_order: 43,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: '2_hand_mods_key3',
        $col_order: 44,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: '2_hand_mods_key4',
        $col_order: 45,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: '2_hand_mods_key5',
        $col_order: 46,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: '1_hand_mods_key2',
        $col_order: 47,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: '1_hand_mods_key3',
        $col_order: 48,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: '1_hand_mods_key4',
        $col_order: 49,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: '1_hand_mods_key5',
        $col_order: 50,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: '1_hand_mods_key6',
        $col_order: 51,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: '1_hand_mods_key7',
        $col_order: 52,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: '1_hand_mods_key8',
        $col_order: 53,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: '1_hand_mods_key9',
        $col_order: 54,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'belt2_mods_key',
        $col_order: 56,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'amulet2_mods_key',
        $col_order: 57,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'ring_mods_key',
        $col_order: 58,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'mods_key41',
        $col_order: 59,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'shield2_mods_key',
        $col_order: 60,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Mods, {
      foreignKey: {
        name: 'mods_key43',
        $col_order: 61,
      },
      targetKey: 'row',
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
