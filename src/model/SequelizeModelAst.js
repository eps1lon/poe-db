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

    return [...requires, this.exports()];
  }

  exports() {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'AssignmentExpression',
        operator: '=',
        left: {
          type: 'MemberExpression',
          object: {
            type: 'Identifier',
            name: 'module',
          },
          property: {
            type: 'Identifier',
            name: 'exports',
          },
          computed: false,
        },
        right: {
          type: 'ArrowFunctionExpression',
          id: null,
          generator: false,
          expression: false,
          async: false,
          params: [
            {
              type: 'Identifier',
              name: 'sequelize',
            },
            {
              type: 'Identifier',
              name: 'DataTypes',
            },
          ],
          body: {
            type: 'BlockStatement',
            body: this.exportBody(),
          },
        },
      },
    };
  }

  exportBody() {
    return [
      this.modelDefinition(),
      ...this.belongsToStatements(),
      ...this.belongsToManyStatements(),
      {
        type: 'ReturnStatement',
        argument: {
          type: 'Identifier',
          name: 'model',
        },
      },
    ];
  }

  modelDefinition() {
    return {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'model',
          },
          init: {
            type: 'CallExpression',
            callee: {
              type: 'MemberExpression',
              object: {
                type: 'Identifier',
                name: 'sequelize',
              },
              property: {
                type: 'Identifier',
                name: 'define',
              },
              computed: false,
            },
            arguments: [
              {
                type: 'StringLiteral',
                value: this.model.name(),
              },
              {
                type: 'ObjectExpression',
                properties: this.attributeExpressions(),
              },
            ],
          },
        },
      ],
      kind: 'const',
    };
  }

  attributeExpressions() {
    return Object.entries(this.model.attributes()).map(([name, attribute]) => {
      return this.attributeExpression(name, attribute);
    });
  }

  attributeExpression(name, attribute) {
    return {
      type: 'ObjectProperty',
      method: false,
      shorthand: false,
      computed: false,
      key: {
        type: 'Identifier',
        name: name,
      },
      value: {
        type: 'ObjectExpression',
        properties: [
          {
            type: 'ObjectProperty',
            method: false,
            shorthand: false,
            computed: false,
            key: {
              type: 'Identifier',
              name: 'type',
            },
            value: {
              type: 'MemberExpression',
              object: {
                type: 'Identifier',
                name: 'DataTypes',
              },
              property: {
                type: 'Identifier',
                name: attribute.type,
              },
              computed: false,
            },
          },
        ],
      },
    };
  }

  belongsToStatements() {
    return [];
  }

  belongsToManyStatements() {
    return [];
  }

  staticRequires() {
    return ['path', 'sequelize'];
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

  buildSequelizeImport(model) {}

  buildAttribute(attr) {}
}

module.exports = SequelizeModelAst;
