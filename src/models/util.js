const fs = require('fs');
const path = require('path');

const basePath = nf => path.join(__dirname, `nf_${nf}`, 'base');

const BASE_PATH = basePath(3);

const isModelFile = file => /[A-Z].*\.js$/.test(file);

const modelFiles = dir =>
  fs.readdirSync(dir).filter(isModelFile).map(file => path.join(dir, file));

const baseModelFiles = (nf = 3) => () => modelFiles(basePath(nf));

module.exports = {
  BASE_PATH,
  isModelFile,
  baseModelFiles,
  modelFiles,
};
