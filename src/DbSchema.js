class DbSchema {
  constructor(spec) {
    this.spe = spec;
  }

  createAllQuery() {
    throw new Error('not implemented');
  }
}

module.exports = DbSchema;
