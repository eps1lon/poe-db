const Sequelize = require('sequelize');
const mysql = require('mysql2/promise');

const { init } = require('./models/');

const { POEDB_HOST, POEDB_USER, POEDB_PW, POEDB_DB } = process.env;

const createOrm = options =>
  new Sequelize(
    POEDB_DB,
    POEDB_USER,
    POEDB_PW,
    Object.assign(
      {
        host: POEDB_HOST,
        dialect: 'mysql',
      },
      options,
    ),
  );

const withModels = options => {
  const sequelize = createOrm(options);

  init(sequelize);

  return sequelize;
};

const db = options =>
  mysql.createConnection(
    Object.assign(
      {
        host: POEDB_HOST,
        user: POEDB_USER,
        password: POEDB_PW,
        database: POEDB_DB,
      },
      options,
    ),
  );

module.exports = {
  connection: db,
  createOrm,
  name: POEDB_DB,
  withModels,
};
