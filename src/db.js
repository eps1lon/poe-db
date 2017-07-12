const Sequelize = require('sequelize');
const mysql = require('mysql2');

const { POEDB_HOST, POEDB_USER, POEDB_PW, POEDB_DB } = process.env;

const orm = options =>
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

const db = options =>
  mysql.connect(
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
  orm_creator: orm,
  name: POEDB_DB,
};
