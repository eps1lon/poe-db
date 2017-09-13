const fs = require('fs');

const withFile = file => {
  const key_file = fs.readFileSync(file);

  // optimization? better data structures for "member in set?" algorithms?
  const keys = new Set(key_file.toString().split('\n'));

  return key => keys.has(key);
};

module.exports = {
  withFile,
};
