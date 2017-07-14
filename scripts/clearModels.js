const fs = require('fs');

const { throwOnError } = require('../src/util');

const { modelFiles } = require('../src/models');

modelFiles()
  .filter(file => /^[A-Z].*\.js$/.test(file))
  .map(file => fs.unlink(file, throwOnError()));
