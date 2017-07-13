const fs = require('fs');
const path = require('path');

const SequelizeModel = require('../../src/model/SequelizeModel');
const { orm_creator, connection, name } = require('../../src/db');

const model_path = path.join(__dirname, '../../src/models');

const db = connection({ database: undefined });

db.connect();

db.query('CREATE DATABASE IF NOT EXISTS ??', [name], async () => {
  const orm = orm_creator();

  try {
    await orm.authenticate();

    const syncs = [];
    const models = require('../../src/models/')(orm);

    for (const [name, model] of Object.entries(models)) {
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
