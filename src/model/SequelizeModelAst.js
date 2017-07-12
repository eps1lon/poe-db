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
      this.buildRequire(path),
    );

    return [...requires];
  }

  staticRequires() {
    return ['sequelize'];
  }

  buildRequire(path) {
    return {
      type: 'AssignmentExpression',
      operator: '=',
      left: {},
      right: { type: 'CallExpression', callee: { type: '' } },
    };
  }
}
