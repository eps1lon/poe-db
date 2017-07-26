const { createOrm } = require('../../src/db');

(async () => {
  const orm = createOrm();

  try {
    await orm.authenticate();

    require('../../src/models/')({ normalization: 3 }).init(orm);

    await orm.truncate();
  } catch (e) {
    console.log(e);
  } finally {
    await orm.close();
  }
})();
