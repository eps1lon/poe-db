const { singularize, camelize } = require('inflection');

class Model {
  static name(dat_file) {
    return singularize(camelize(dat_file.replace(/\.dat$/, '')));
  }

  constructor(file, props) {
    this.file = file;
    this.props = props;
  }

  ast() {
    throw new Error('not implemented');
  }
}

module.exports = Model;
