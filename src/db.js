const Sequelize = require('sequelize');

const { POEDB_HOST, POEDB_USER, POEDB_PW, POEDB_DB } = process.env;

const db = options =>
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

module.exports = {
  connection: db,
  name: POEDB_DB,
};
