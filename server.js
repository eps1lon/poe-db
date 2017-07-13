const express = require('express');

const { router } = require('./src/routes');

const { orm_creator } = require('./src/db');
const orm = orm_creator();

orm.authenticate().catch(e => console.warn(e));

console.log('building models...');
const models = require('./src/models')(orm);
console.log('done');

const port = process.env.PORT || 3000;

const app = express();

// mount router
app.use(router(models));

app.listen(port);

console.log(`listen to localhost:${port}`);
