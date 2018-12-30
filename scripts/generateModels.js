const { ArgumentParser } = require('argparse');
const fs = require('fs');
const path = require('path');
const generate = require('@babel/core').transformFromAstSync;
const t = require('@babel/types');

const { BASE_PATH } = require('../src/models/util');
const { throwOnError } = require('../src/util');
const SequelizeModel = require('../src/model/SequelizeModel');

const spec = require('../data/spec.json');

const parser = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'generates base models in src/models/base',
});

parser.addArgument(['-p', '--poe'], {
  help: 'the game version from which spec.json was extracted',
  required: true,
});

const { poe: poe_version } = parser.parseArgs();

const versionAst = version => {
  return t.program([
    t.expressionStatement(
      t.assignmentExpression(
        '=',
        t.memberExpression(t.identifier('module'), t.identifier('exports')),
        t.stringLiteral(version),
      ),
    ),
  ]);
};

const writeAst = async model => {
  const ast = model.ast();

  try {
    fs.writeFile(
      path.join(BASE_PATH, model.name() + '.js'),
      generate(ast).code,
      throwOnError(),
    );
  } catch (e) {
    fs.writeFile('./.debug.json', JSON.stringify(ast, null, 2), throwOnError());
  }
};

const whitelist = Object.keys(spec);
const blacklist = [
  // cause name collision with LeagueFlag.dat and holds not data
  'LeagueFlags.dat',
];

for (const [name, props] of Object.entries(spec).filter(
  ([name]) => whitelist.indexOf(name) !== -1 && blacklist.indexOf(name) === -1,
)) {
  const model = new SequelizeModel(name, props);

  writeAst(model);

  model.throughModels().map(({ model }) => writeAst(model));
}

fs.writeFile(
  path.join(__dirname, '../src/models/version.js'),
  generate(versionAst(poe_version)).code,
  throwOnError(),
);
