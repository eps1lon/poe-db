const MysqlSchema = require('../../src/MysqlSchema');
const MysqlTableSchema = require('../../src/MysqlTableSchema');
const { connection } = require('../../src/db');

const db = connection({ multipleStatements: true });
const specification = require('../../data/spec.json');
const records = require('../../data/records.json');

const schema = new MysqlSchema(specification);

db.connect();

for (const [dat_file, dat] of Object.entries(schema.spec)) {
  const table = new MysqlTableSchema(dat_file, dat);

  let insert = table.insertQuery({ ignore: true }) + ' VALUES ';

  for (let row = 0; row < records[dat_file].length; row += 1) {
    const record = records[dat_file][row];

    const values = table.cols().map(col => {
      if (table.fields[col] === undefined) {
        return row;
      } else {
        const value = record[table.fields[col].rowid];

        if (value === undefined) {
          return null;
        } else {
          if (Array.isArray(value)) {
            return value.join(',');
          } else {
            return value;
          }
        }
      }
    });

    if (row > 0) {
      insert += ', ';
    }

    insert += db.format(
      '(' + Array(values.length).fill('?').join(', ') + ')',
      values,
    );
  }

  if (records[dat_file].length > 0) {
    db.query(insert, (error, results) => {
      if (error) {
        console.warn(insert, table.tableName());
        throw error;
      } else {
        console.log(
          `inserted ${results.affectedRows} into ${table.tableName()}`,
        );
      }
    });
  }
}

db.end();
