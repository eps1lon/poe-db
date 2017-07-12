const { connection, name } = require('../../src/db');

const db = connection({ database: undefined });

db.connect();

db.query('DROP DATABASE IF EXISTS ??', [name]);

db.end();
