class Model {
  static name(dat_file) {
    return dat_file.replace(/\.dat$/, '');
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
