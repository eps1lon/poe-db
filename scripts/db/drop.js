const mysql = require('mysql');

const { POEDB_HOST } = process.env;
const { connection, name } = require('../../src/db');

const db = connection({ database: undefined, multipleStatements: true });

db.connect();

db.query('DROP DATABASE IF EXISTS ??', [name]);

db.end();
