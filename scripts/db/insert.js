const _ = require('lodash');

const { createOrm } = require('../../src/db');
const { buildAssocKeys, buildAttrObj } = require('../../src/model/util');

// maximum tally of records inserted in one packet
const MAX_PACKET_SIZE = 50000;

// splits records into chunks and maps model#bulkCreate on these chunks
const bulkChunkCreate = (model, records, size, options = {}) =>
  _.chunk(records, size).map(
    async chunk => await model.bulkCreate(chunk, options),
  );

/**
 * gets the affectedRows by all the chunks
 * @param {bulkdCreate.returnval[]} chunks 
 */
const affectedRowsInChunks = async chunks => {
  const inserted = await Promise.all(chunks);
  return _.sum(inserted.map(chunk => chunk.length));
};

let data_records = [];
try {
  data_records = require('../../data/records.json');
} catch (err) {
  if (!process.env.CI) {
    throw err;
  }
} finally {
  insert(data_records);
}

async function insert(all_records) {
  const orm = createOrm({ logging: false });
  const models = require('../../src/models').init(orm);

  const start_time = Date.now();

  let total_insert_count = 0;

  try {
    for (const [dat_file, records] of Object.entries(all_records)) {
      const model = Object.values(models).find(
        model => model.DAT_FILE === dat_file,
      );
      if (model === undefined) {
        throw new Error("could not find model for '" + dat_file + "'");
      }

      const records_as_obj = records.map((record, row) => {
        return buildAttrObj(record, model, { row });
      });

      const fields = Object.keys(records_as_obj[0] || {});

      try {
        const inserted = await model.bulkCreate(records_as_obj, {
          fields,
          ignoreDuplicates: false,
          updateOnDuplicate: fields,
        });

        const affected_rows = inserted.length;

        total_insert_count += affected_rows;

        console.log(`inserted ${affected_rows} instances into ${model.name}`);
      } catch (err) {
        console.warn(model.name, String(err), records_as_obj[0]);
      }

      const many_to_many_records = records.reduce(
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
      // create entries in the Through models
      for (const assoc in many_to_many_records) {
        const assocs_as_obj = many_to_many_records[assoc];
        const assoc_model = model.associations[assoc].through.model;

        // TODO smartly delete. not that important atm for associations
        console.log(`truncated ${assoc_model.name}`);
        await assoc_model.truncate();

        const fields = Object.keys(assocs_as_obj[0] || {});

        try {
          // chunk or we will get packet to large
          const inserts = bulkChunkCreate(
            assoc_model,
            assocs_as_obj,
            MAX_PACKET_SIZE,
            {
              fields,
              ignoreDuplicates: false,
              // keep this as simple as possible
              // these are just join models so we are cutting it a bit loose to
              // be fast
              hooks: false,
              validate: false,
              // not documented but according to stackoverflow this
              // will skip building every single object
              raw: true,
              updateOnDuplicate: fields,
            },
          );

          const affected_rows = await affectedRowsInChunks(inserts);
          total_insert_count += affected_rows;

          console.log(
            `inserted ${affected_rows} associations into ${assoc_model.name}`,
          );
        } catch (err) {
          console.warn(
            assoc_model.name,
            Object.entries(records[0]),
            assocs_as_obj[0],
            fields,
          );

          throw String(err);
        }
      }
    }
  } catch (e) {
    console.warn(e);
  } finally {
    orm.close();

    const runtime = (Date.now() - start_time) / 1000;
    console.log(
      `inserted ${total_insert_count} in ${runtime}s (${total_insert_count /
        runtime} inserts/s)`,
    );
  }
}
