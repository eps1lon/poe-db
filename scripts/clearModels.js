const fs = require('fs');

const { throwOnError } = require('../src/util');

const { baseModelFiles } = require('../src/models');

baseModelFiles().map(file => fs.unlink(file, throwOnError()));
