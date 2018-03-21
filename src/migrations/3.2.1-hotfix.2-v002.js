const { underscore } = require('../util');

module.exports = {
  up: async queryInterface => {
    await queryInterface.renameColumn(
      'essences',
      underscore('Belt2_ModsKey'),
      underscore('Belt_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Boots3_ModsKey'),
      underscore('Display_Armour_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Wand_ModsKey'),
      underscore('Wand_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Boots1_ModsKey'),
      underscore('Display_Boots_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Helmet2_ModsKey'),
      underscore('Helmet_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Amulet2_ModsKey'),
      underscore('Amulet_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('2Hand_ModsKey1'),
      underscore('Display_2HandMeleeWeapon_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('2Hand_ModsKey2'),
      underscore('Staff_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Boots2_ModsKey'),
      underscore('Boots_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('2Hand_ModsKey3'),
      underscore('2HandSword_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('2Hand_ModsKey4'),
      underscore('2HandAxe_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('2Hand_ModsKey5'),
      underscore('2HandMace_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Body_Armour1_ModsKey'),
      underscore('Display_BodyArmour_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('ModsKey1'),
      underscore('Display_Wand_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('ModsKey2'),
      underscore('Display_Bow_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Amulet1_ModsKey'),
      underscore('Display_Amulet_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Shield1_ModsKey'),
      underscore('Display_Shield_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Ranged_ModsKey'),
      underscore('Display_Ranged_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('ModsKey41'),
      underscore('Display_Jewellry_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('ModsKey43'),
      underscore('Display_Item_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Ring_ModsKey'),
      underscore('Ring_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Bow_ModsKey'),
      underscore('Bow_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Gloves1_ModsKey'),
      underscore('Display_Gloves_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('BodyArmour2_ModsKey'),
      underscore('BodyArmour_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('1Hand_ModsKey1'),
      underscore('Display_Weapon_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('ModsKey15'),
      underscore('Display_2HandWeapon_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('1Hand_ModsKey3'),
      underscore('Dagger_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('ModsKey14'),
      underscore('Display_1HandWeapon_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('1Hand_ModsKey2'),
      underscore('Claw_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('ModsKey13'),
      underscore('Display_Melee_Weapon_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('1Hand_ModsKey5'),
      underscore('1HandThrustingSword_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('1Hand_ModsKey4'),
      underscore('1HandSword_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('1Hand_ModsKey7'),
      underscore('1HandMace_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Belt3_ModsKey'),
      underscore('Display_Belt_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('1Hand_ModsKey6'),
      underscore('1HandAxe_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Helmet1_ModsKey'),
      underscore('Display_Helmet_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('1Hand_ModsKey8'),
      underscore('Sceptre_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Shield2_ModsKey'),
      underscore('Shield_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Belt1_ModsKey'),
      underscore('Display_Ring_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Gloves2_ModsKey'),
      underscore('Gloves_ModsKey'),
    );
  },
  down: async queryInterface => {
    await queryInterface.renameColumn(
      'essences',
      underscore('Belt_ModsKey'),
      underscore('Belt2_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Display_Armour_ModsKey'),
      underscore('Boots3_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Wand_ModsKey'),
      underscore('Wand_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Display_Boots_ModsKey'),
      underscore('Boots1_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Helmet_ModsKey'),
      underscore('Helmet2_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Amulet_ModsKey'),
      underscore('Amulet2_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Display_2HandMeleeWeapon_ModsKey'),
      underscore('2Hand_ModsKey1'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Staff_ModsKey'),
      underscore('2Hand_ModsKey2'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Boots_ModsKey'),
      underscore('Boots2_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('2HandSword_ModsKey'),
      underscore('2Hand_ModsKey3'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('2HandAxe_ModsKey'),
      underscore('2Hand_ModsKey4'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('2HandMace_ModsKey'),
      underscore('2Hand_ModsKey5'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Display_BodyArmour_ModsKey'),
      underscore('Body_Armour1_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Display_Wand_ModsKey'),
      underscore('ModsKey1'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Display_Bow_ModsKey'),
      underscore('ModsKey2'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Display_Amulet_ModsKey'),
      underscore('Amulet1_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Display_Shield_ModsKey'),
      underscore('Shield1_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Display_Ranged_ModsKey'),
      underscore('Ranged_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Display_Jewellry_ModsKey'),
      underscore('ModsKey41'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Display_Item_ModsKey'),
      underscore('ModsKey43'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Ring_ModsKey'),
      underscore('Ring_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Bow_ModsKey'),
      underscore('Bow_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Display_Gloves_ModsKey'),
      underscore('Gloves1_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('BodyArmour_ModsKey'),
      underscore('BodyArmour2_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Display_Weapon_ModsKey'),
      underscore('1Hand_ModsKey1'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Display_2HandWeapon_ModsKey'),
      underscore('ModsKey15'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Dagger_ModsKey'),
      underscore('1Hand_ModsKey3'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Display_1HandWeapon_ModsKey'),
      underscore('ModsKey14'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Claw_ModsKey'),
      underscore('1Hand_ModsKey2'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Display_Melee_Weapon_ModsKey'),
      underscore('ModsKey13'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('1HandThrustingSword_ModsKey'),
      underscore('1Hand_ModsKey5'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('1HandSword_ModsKey'),
      underscore('1Hand_ModsKey4'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('1HandMace_ModsKey'),
      underscore('1Hand_ModsKey7'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Display_Belt_ModsKey'),
      underscore('Belt3_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('1HandAxe_ModsKey'),
      underscore('1Hand_ModsKey6'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Display_Helmet_ModsKey'),
      underscore('Helmet1_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Sceptre_ModsKey'),
      underscore('1Hand_ModsKey8'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Shield_ModsKey'),
      underscore('Shield2_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Display_Ring_ModsKey'),
      underscore('Belt1_ModsKey'),
    );
    await queryInterface.renameColumn(
      'essences',
      underscore('Gloves_ModsKey'),
      underscore('Gloves2_ModsKey'),
    );
  },
};
