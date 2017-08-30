const { withModels } = require('../../../db');

const sequelize = withModels({ logging: false });

it('should not crash on any scope', async () => {
  for (const [model_name, model] of Object.entries(sequelize.models)) {
    const { scopes } = model.options;

    for (const scope_name of Object.keys(scopes)) {
      // just "ping" the scope and throw if it rejects
      try {
        const count = await model.scope(scope_name).count();
      } catch (err) {
        throw new Error(
          `scope '${scope_name} in '${model_name}' failed because of ${String(
            err,
          )}`,
        );
      }
    }
  }
});

afterAll(() => {
  sequelize.close();
});
