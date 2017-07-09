class DbSchema {
  constructor(spec) {
    this.spec = spec;
  }

  createAllQuery() {
    throw new Error('not implemented');
  }
}

module.exports = DbSchema;
