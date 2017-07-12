const Sequelize = require('sequelize');

const { orm_creator, connection, name } = require('../../src/db');
const models = require('../../data/sequelize.json');
const { entriesToObj, propChain } = require('../../src/util');

const db = connection({ database: undefined });

db.connect();

db.query('CREATE DATABASE IF NOT EXISTS ??', [name], async () => {
  const orm = orm_creator();

  try {
    await orm.authenticate();

    const syncs = [];

    for (const model_props of models) {
      const deserialized_props = entriesToObj(
        Object.entries(model_props.define[1]).map(([name, props]) => {
          return [
            name,
            Object.assign(props, { type: propChain(Sequelize, props.type) }),
          ];
        }),
      );

      const model = orm.define(model_props.define[0], deserialized_props);

      syncs.push(model.sync());
    }

    await Promise.all(syncs);
  } catch (e) {
    console.log(e);
    await orm.close();
  }

  await orm.close();

  return;
});

db.end();
