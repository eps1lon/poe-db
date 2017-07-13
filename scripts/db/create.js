const { orm_creator, connection, name } = require('../../src/db');

const db = connection({ database: undefined });

db.connect();

db.query('CREATE DATABASE IF NOT EXISTS ??', [name], async () => {
  const orm = orm_creator();

  try {
    await orm.authenticate();

    const syncs = [];
    require('../../src/models/')(orm);

    // use orm.models instead of the returned models because we also
    // need to create the models defined in 'through'
    for (const [, model] of Object.entries(orm.models)) {
      syncs.push(model.sync({ force: true }));
    }
    await Promise.all(syncs);
  } catch (e) {
    console.log(e);
  } finally {
    await orm.close();
  }
});

db.end();
