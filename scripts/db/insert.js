const { orm_creator } = require('../../src/db');
const { buildAssocKeys, buildAttrObj } = require('../../src/model/util');

const records = require('../../data/records.json');

(async () => {
  const orm = orm_creator();
  const models = require('../../src/models')(orm);
  try {
    for (const model of Object.values(models)) {
      const model_records = records[model.DAT_FILE];

      const records_as_obj = model_records.map((record, row) => {
        return buildAttrObj(record, model, { row });
      });

      const many_to_may_records = model_records.reduce(
        (associations, record, row) => {
          const assoc_keys = buildAssocKeys(model, record, row);

          if (row === 0) {
            return assoc_keys;
          } else {
            // merge
            for (const assoc in assoc_keys) {
              associations[assoc] = associations[assoc].concat(
                assoc_keys[assoc],
              );
            }

            return associations;
          }
        },
        {},
      );

      await model.bulkCreate(records_as_obj, {
        ignoreDuplicates: true,
      });

      // create entries in the Through models
      for (const assoc in many_to_may_records) {
        const records = many_to_may_records[assoc];

        await model.associations[
          assoc
        ].through.model.bulkCreate(
          records.map(([source, target]) => {
            return {
              [model.associations[assoc].foreignKey]: source,
              [model.associations[assoc].otherKey]: target,
            };
          }),
          { ignoreDuplicates: true },
        );
      }
    }
  } catch (e) {
    console.warn(e);
  } finally {
    orm.close();
  }
})();
