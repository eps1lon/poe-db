const MysqlSchema = require('../../src/MysqlSchema');
const { connection, name } = require('../../src/db');
const specification = require('../../data/dat.specification.json');

const schema = new MysqlSchema(specification.dats);

const db = connection({ multipleStatements: true, database: undefined });

db.connect();

db.query('CREATE DATABASE IF NOT EXISTS ??', [name]);

db.query('USE ??', [name]);

db.query(schema.createAllQuery());

db.end();
