const { createOrm, connection } = require('../../db');
const { prepareAssociationsForInclude } = require('../../model/util');

/**
 * benchmark for a different query strategy when combining :includes with :limit
 * 
 * basically with the limit we need to use a subquery in our FROM clause
 * which is a derived table and has no indices. but results show that the speedup
 * with preload is <15% so we will stick with the trivial approach
 */

const orm = createOrm({ logging: false });
const db = connection();

require('../../models')({ normalization: 3 }).init(orm);

const findAllWithMultipleQueries = async ({
  model,
  where,
  attributes,
  offset,
  limit,
  order,
}) => {
  // sequelize will generate a subquery, try fetching the ids
  // first then run a separate query for joins
  const { count, rows } = await model.findAndCountAll({
    attributes: ['row'],
    where,
    offset,
    limit,
    order,
  });

  return {
    count,
    result: await model.findAll({
      attributes,
      where: { row: rows.map(({ row }) => row) },
      include: prepareAssociationsForInclude(model),
      order,
    }),
  };
};

const findAllWithSubquery = ({
  model,
  where,
  attributes,
  offset,
  limit,
  order,
}) => {
  return model.findAndCountAll({
    attributes,
    where,
    include: prepareAssociationsForInclude(model),
    offset,
    limit,
    order,
  });
};

const benchmark = async methods => {
  const tries = 20;

  for (const { name, fn } of methods) {
    const start = Date.now();

    for (let i = 0; i < tries; ++i) {
      await fn({
        model: orm.models['ActiveSkill'],
        attributes: ['row'],
        offset: 0,
        limit: 100,
        order: [['row', 'ASC']],
      });

      await db.query('RESET QUERY CACHE');
    }

    const runtime = Date.now() - start;
    console.log(
      `ran ${name} in ${runtime / 1000} (${runtime /
        1000 /
        tries} s/op, ${tries / (runtime / 1000)} op/s)`,
    );
  }
  return;
};

benchmark([
  {
    name: 'default',
    fn: findAllWithSubquery,
  },
  {
    name: 'preload',
    fn: findAllWithMultipleQueries,
  },
]).then(() => {
  orm.close();
  db.close();
});
