const { underscore } = require('../util');

// followup to 3.2.1-hotfix.2-v002, missing down method
module.exports = {
  up: async queryInterface => {
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('Belt2_ModsKey'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Belt_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('Boots3_ModsKey'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_Armour_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('Wand_ModsKey'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Wand_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('Boots1_ModsKey'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_Boots_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('Helmet2_ModsKey'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Helmet_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('Amulet2_ModsKey'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Amulet_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('2Hand_ModsKey1'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_2HandMeleeWeapon_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('2Hand_ModsKey2'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Staff_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('Boots2_ModsKey'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Boots_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('2Hand_ModsKey3'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('2HandSword_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('2Hand_ModsKey4'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('2HandAxe_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('2Hand_ModsKey5'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('2HandMace_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('Body_Armour1_ModsKey'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_BodyArmour_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('ModsKey1'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_Wand_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('ModsKey2'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_Bow_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('Amulet1_ModsKey'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_Amulet_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('Shield1_ModsKey'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_Shield_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('Ranged_ModsKey'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_Ranged_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('ModsKey41'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_Jewellry_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('ModsKey43'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_Item_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('Ring_ModsKey'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Ring_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('Bow_ModsKey'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Bow_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('Gloves1_ModsKey'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_Gloves_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('BodyArmour2_ModsKey'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('BodyArmour_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('1Hand_ModsKey1'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_Weapon_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('ModsKey15'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_2HandWeapon_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('1Hand_ModsKey3'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Dagger_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('ModsKey14'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_1HandWeapon_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('1Hand_ModsKey2'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Claw_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('ModsKey13'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_Melee_Weapon_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('1Hand_ModsKey5'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('1HandThrustingSword_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('1Hand_ModsKey4'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('1HandSword_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('1Hand_ModsKey7'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('1HandMace_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('Belt3_ModsKey'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_Belt_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('1Hand_ModsKey6'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('1HandAxe_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('Helmet1_ModsKey'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_Helmet_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('1Hand_ModsKey8'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Sceptre_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('Shield2_ModsKey'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Shield_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('Belt1_ModsKey'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Display_Ring_ModsKey')],
    });
    await queryInterface.removeIndex(
      'essences',
      'index_' + underscore('Gloves2_ModsKey'),
    );
    await queryInterface.addIndex('essences', {
      fields: [underscore('Gloves_ModsKey')],
    });
  },
  down: async () => {},
};
