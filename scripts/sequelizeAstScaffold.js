const fs = require('fs');
const path = require('path');
const { transformFileSync } = require('@babel/core');

// create a scaffold ast object that can be used as a reference in
// SequelizeModelAst

const isObj = val => val !== null && typeof val === 'object';

const removeProps = (obj, props) => {
  if (!isObj(obj)) {
    return obj;
  }

  for (const prop of Object.getOwnPropertyNames(obj)) {
    if (props.indexOf(prop) !== -1) {
      obj[prop] = undefined;
    } else if (Array.isArray(obj[prop])) {
      obj[prop] = obj[prop].map(val => removeProps(val, props));
    } else {
      obj[prop] = removeProps(obj[prop], props);
    }
  }

  return obj;
};

const { ast } = transformFileSync(
  path.join(__dirname, './exampleSequelizeModel.js'),
  {
    sourceType: 'script',
    parserOpts: { ranges: {} }, // not yet in babylon
  },
);

fs.writeFileSync(
  path.join(__dirname, './sequelizeAstScaffold.json'),
  JSON.stringify(removeProps(ast.program, ['start', 'end', 'loc']), null, 2),
);
