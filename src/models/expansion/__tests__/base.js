const { createOrm } = require('../../../db');
const base = require('../../base/');
const baseExpansion = require('../base');

const sequelize = createOrm({ logging: false });
const models = sequelize.models;
base(sequelize);

it('should apply the expansion without crash', () => {
  const model = sequelize.models.CraftingBenchOption;

  baseExpansion(model, sequelize.models);
  expect(model.denormalizeThrough).toBeDefined();
});

it('should denormalize extended props by joining the in a comma separated list', async () => {
  const model = models.CraftingBenchOption;

  const results = model.findAll({
    attributes: ['row'],
    limit: 3,
    include: [
      {
        model: models.BaseItemType,
        as: 'cost_base_item_types',
        attributes: ['row'],
        through: {
          attributes: ['value', 'priority'],
        },
      },
    ],
    order: [['row', 'asc']],
  });

  const denormalized = await model.denormalizeThrough(
    'cost_base_item_types',
    [
      { attribute: 'row', as: 'Cost_BaseItemTypesKeys', through_prop: false },
      { attribute: 'value', as: 'Cost_Values', through_prop: true },
    ],
    results,
  );

  expect(denormalized).toMatchSnapshot();
});

afterAll(() => {
  sequelize.close();
});
