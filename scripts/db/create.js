const { orm_creator, connection, name } = require('../../src/db');

const db = connection({ database: undefined });

db.connect();

db.query('CREATE DATABASE IF NOT EXISTS ??', [name], async () => {
  const orm = orm_creator();

  try {
    await orm.authenticate();

    require('../../src/models/')({ normalization: 3 }).init(orm);

    // use orm.sync instead of the returned models because we also
    // need to create the models defined in 'through' or might miss other
    // auto generated models
    await orm.sync();
  } catch (e) {
    console.log(e);
  } finally {
    await orm.close();
  }
});

db.end();
