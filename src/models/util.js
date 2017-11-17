const fs = require('fs');
const path = require('path');

const BASE_PATH = path.join(__dirname, 'base');

const isModelFile = file => /[A-Z].*\.js$/.test(file);

const modelFiles = dir =>
  fs
    .readdirSync(dir)
    .filter(isModelFile)
    .map(file => path.join(dir, file));

const baseModelFiles = () => modelFiles(BASE_PATH);

module.exports = {
  BASE_PATH,
  isModelFile,
  baseModelFiles,
  modelFiles,
};
