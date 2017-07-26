const { orm_creator } = require('../../src/db');

(async () => {
  const orm = orm_creator();

  try {
    await orm.authenticate();

    require('../../src/models/').init(orm);

    await orm.truncate();
  } catch (e) {
    console.log(e);
  } finally {
    await orm.close();
  }
})();
