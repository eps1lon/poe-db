const restify = require('restify');

const { mountRoutes } = require('./src/routes');
const orm = require('./src/db').orm_creator();

const port = process.env.PORT || 3000;

const orm_ready = orm
  .authenticate({ logging: false })
  .then(() => {
    console.log('db connection authenticated');
  })
  .catch(e => console.warn(e));

console.log('building models...');
const models = require('./src/models')({ normalization: 3 }).init(orm);
console.log('done');

const server = restify.createServer({
  name: 'mypoedb',
  version: '1.0.0',
});
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

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
