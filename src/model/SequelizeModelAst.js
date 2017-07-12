class SequelizeModelAst {
  constructor(model) {
    this.model = model;
  }

  ast() {
    return {
      type: 'Program',
      sourceType: 'script',
      body: this.body(),
    };
  }

  body() {
    const requires = [...this.staticRequires()].map(path =>
      this.buildRequire(path, path),
    );

    return [...requires];
  }

  staticRequires() {
    return ['sequelize'];
  }

  buildRequire(identifier, path) {
    return {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: identifier,
          },
          init: {
            type: 'CallExpression',
            callee: {
              type: 'Identifier',
              name: 'require',
            },
            arguments: [
              {
                type: 'StringLiteral',
                value: path,
              },
            ],
          },
        },
      ],
      kind: 'const',
    };
  }
}

module.exports = SequelizeModelAst;
