const { DatabaseError } = require('sequelize');
const { InternalServerError } = require('restify-errors');

const useErrorHandlers = server => {
  server.on('uncaughtException', (req, res, route, error) => {
    console.log(error);
    res.send();
  });
};

module.exports = useErrorHandlers;
