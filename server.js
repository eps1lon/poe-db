const createServer = require('./src/server/createServer');
const useErrorHandlers = require('./src/server/useErrorHandlers');
const { mountRoutes } = require('./src/server/routes');
const { createOrm } = require('./src/db');

const port = process.env.PORT || 3000;

const orm = createOrm({
  logging: false,
});

const orm_ready = orm
  .authenticate()
  .then(() => {
    console.log('db connection authenticated');
  })
  .catch(e => console.warn(e));

console.log('building models...');
const models = require('./src/models').init(orm);
console.log('done');

const server = createServer();

useErrorHandlers(server);

// mount router
mountRoutes(models)(server);

const listening = new Promise((resolve, reject) => {
  server.listen(port, error => {
    if (error) {
      reject(error);
    } else {
      console.log(`listening to ${port}`);
      resolve();
    }
  });
});

Promise.all([orm_ready, listening]).then(() => {
  console.log('server ready');
});
