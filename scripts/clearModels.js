const fs = require('fs');

const { throwOnError } = require('../src/util');

const { modelFiles } = require('../src/models');

modelFiles().map(file => fs.unlink(file, throwOnError()));
