const { orm_creator } = require('../../src/db');
const SequelizeModel = require('../../src/model/SequelizeModel');

const records = require('../../data/records.json');

const buildAttrObj = (record, model, init = {}) => {
  return Object.entries(
    model.attributes,
  ).reduce((attributes, [attribute, props]) => {
    const index = props['$col_order'];
    // there shouldnt be any index error but for now we will blindly run into one
    // -1 is only used for primary attr
    if (index !== undefined && index !== -1) {
      const value = record[index];

      attributes[attribute] = Array.isArray(value) ? value.join(',') : value;
    }

    return attributes;
  }, init);
};
(async () => {
  const orm = orm_creator();
  const models = require('../../src/models')(orm);
  try {
    for (const model of Object.values(models)) {
      const model_records = records[model.DAT_FILE].map((record, row) => {
        return buildAttrObj(record, model, { row });
      });

      await model.bulkCreate(model_records, {
        ignoreDuplicates: true,
      });
    }
  } catch (e) {
    console.warn(e);
  } finally {
    orm.close();
  }
})();
