const mysql = require('mysql');

const { POEDB_HOST, POEDB_USER, POEDB_PW, POEDB_DB } = process.env;

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
  name: POEDB_DB,
};
