const { singularize, camelize } = require('inflection');

class Model {
  static name(dat_file) {
    return singularize(camelize(dat_file.replace(/\.dat$/, '')));
  }

  constructor(file, props) {
    this.dat_file = file;
    this.props = props;
  }

  ast() {
    throw new Error('not implemented');
  }

  name() {
    return Model.name(this.dat_file);
  }
}

module.exports = Model;
