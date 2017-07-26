const { baseModelFiles } = require('./util');

const base = (nf = 3) => require(`./nf_${nf}/base`);
const addScopes = (nf = 3) => require(`./nf_${nf}/scope`);

module.exports = ({ normalization = 3 }) => {
  return {
    baseModelFiles: baseModelFiles(normalization),
    init: sequelize => {
      const models = base(normalization)(sequelize);

      // add scopes
      addScopes(normalization)(models);

      return models;
    },
  };
};
