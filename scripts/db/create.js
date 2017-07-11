const MysqlSchema = require('../../src/MysqlSchema');
const { connection, name } = require('../../src/db');
const specification = require('../../data/spec.json');

const schema = new MysqlSchema(specification);

const db = connection({ database: undefined });

db.connect();

db.query('CREATE DATABASE IF NOT EXISTS ??', [name]);

db.query('USE ??', [name]);

schema.createQueries().forEach(query => {
  db.query(query, error => {
    if (error) {
      console.warn(error, query);
      throw error;
    }
  });
});

db.end();
