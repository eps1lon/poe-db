const fs = require('fs');
const path = require('path');

const BASE_PATH = path.join(__dirname, 'base');

const isModelFile = file => /[A-Z].*\.js$/.test(file);

const modelFiles = () =>
  fs
    .readdirSync(BASE_PATH)
    .filter(isModelFile)
    .map(file => path.join(BASE_PATH, file));

module.exports = {
  isModelFile,
  modelFiles,
};
