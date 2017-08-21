module.exports = models => {
  return {
    'patch-3.0.1': {
      include: [
        {
          attributes: ['base_monster_type_index'],
          model: models.MonsterVariety,
          as: 'monster_variety',
        },
      ],
      order: [['unknown3', 'asc'], ['unknown2', 'asc']],
    },
  };
};
