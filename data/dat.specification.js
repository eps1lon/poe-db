// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function() {
  function id(x) {
    return x[0];
  }

  const parseString = ([chars]) => chars.join('');

  const objMerge = (objects, defaults = {}) =>
    objects.reduce(
      (fields, field) => Object.assign(fields, field),
      Object.assign({}, defaults),
    );

  const fields_default = {
    key: '',
    key_id: '',
    key_offset: 0,
    enum: '',
    unique: false,
    file_path: false,
    file_ext: '',
    display: '',
    display_type: '{0}',
    description: '',
  };

  const virtual_fields_default = {
    fields: [],
    zip: false,
  };
  var grammar = {
    Lexer: undefined,
    ParserRules: [
      { name: 'Main', symbols: ['Dats'], postprocess: d => objMerge(d[0]) },
      { name: 'Dats$ebnf$1', symbols: [] },
      {
        name: 'Dats$ebnf$1$subexpression$1$ebnf$1',
        symbols: [{ literal: '\n' }],
        postprocess: id,
      },
      {
        name: 'Dats$ebnf$1$subexpression$1$ebnf$1',
        symbols: [],
        postprocess: function(d) {
          return null;
        },
      },
      {
        name: 'Dats$ebnf$1$subexpression$1',
        symbols: ['Dat', 'Dats$ebnf$1$subexpression$1$ebnf$1'],
      },
      {
        name: 'Dats$ebnf$1',
        symbols: ['Dats$ebnf$1', 'Dats$ebnf$1$subexpression$1'],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        },
      },
      {
        name: 'Dats',
        symbols: ['Dats$ebnf$1'],
        postprocess: d => d[0].map(e => e[0]),
      },
      { name: 'Dat$ebnf$1', symbols: ['Fields'], postprocess: id },
      {
        name: 'Dat$ebnf$1',
        symbols: [],
        postprocess: function(d) {
          return null;
        },
      },
      { name: 'Dat$ebnf$2', symbols: ['VirtualFields'], postprocess: id },
      {
        name: 'Dat$ebnf$2',
        symbols: [],
        postprocess: function(d) {
          return null;
        },
      },
      {
        name: 'Dat',
        symbols: [
          { literal: '[' },
          'DatIdent',
          { literal: ']' },
          'Dat$ebnf$1',
          'Dat$ebnf$2',
        ],
        postprocess: d => ({ [d[1]]: { fields: d[3], virtual_fields: d[4] } }),
      },
      {
        name: 'Fields$string$1',
        symbols: [
          { literal: '\n' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: '[' },
          { literal: '[' },
          { literal: 'f' },
          { literal: 'i' },
          { literal: 'e' },
          { literal: 'l' },
          { literal: 'd' },
          { literal: 's' },
          { literal: ']' },
          { literal: ']' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      { name: 'Fields$ebnf$1', symbols: [] },
      {
        name: 'Fields$ebnf$1',
        symbols: ['Fields$ebnf$1', 'Field'],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        },
      },
      {
        name: 'Fields',
        symbols: ['Fields$string$1', 'Fields$ebnf$1'],
        postprocess: d => objMerge(d[1]),
      },
      {
        name: 'Field$string$1',
        symbols: [
          { literal: '\n' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: '[' },
          { literal: '[' },
          { literal: '[' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'Field$string$2',
        symbols: [{ literal: ']' }, { literal: ']' }, { literal: ']' }],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      { name: 'Field$ebnf$1', symbols: [] },
      {
        name: 'Field$ebnf$1',
        symbols: ['Field$ebnf$1', 'Spec'],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        },
      },
      {
        name: 'Field',
        symbols: [
          'Field$string$1',
          'FieldIdent',
          'Field$string$2',
          'Field$ebnf$1',
        ],
        postprocess: d => ({ [d[1]]: objMerge(d[3], fields_default) }),
      },
      {
        name: 'VirtualFields$string$1',
        symbols: [
          { literal: '\n' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: '[' },
          { literal: '[' },
          { literal: 'v' },
          { literal: 'i' },
          { literal: 'r' },
          { literal: 't' },
          { literal: 'u' },
          { literal: 'a' },
          { literal: 'l' },
          { literal: '_' },
          { literal: 'f' },
          { literal: 'i' },
          { literal: 'e' },
          { literal: 'l' },
          { literal: 'd' },
          { literal: 's' },
          { literal: ']' },
          { literal: ']' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      { name: 'VirtualFields$ebnf$1', symbols: [] },
      {
        name: 'VirtualFields$ebnf$1',
        symbols: ['VirtualFields$ebnf$1', 'VirtualField'],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        },
      },
      {
        name: 'VirtualFields',
        symbols: ['VirtualFields$string$1', 'VirtualFields$ebnf$1'],
        postprocess: d => objMerge(d[1]),
      },
      {
        name: 'VirtualField$string$1',
        symbols: [
          { literal: '\n' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: '[' },
          { literal: '[' },
          { literal: '[' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'VirtualField$string$2',
        symbols: [{ literal: ']' }, { literal: ']' }, { literal: ']' }],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'VirtualField',
        symbols: [
          'VirtualField$string$1',
          'FieldIdent',
          'VirtualField$string$2',
          'VirtualSpec',
        ],
        postprocess: d => ({ [d[1]]: objMerge(d[3], virtual_fields_default) }),
      },
      {
        name: 'VirtualSpec$ebnf$1',
        symbols: ['VirtualSpecFields'],
        postprocess: id,
      },
      {
        name: 'VirtualSpec$ebnf$1',
        symbols: [],
        postprocess: function(d) {
          return null;
        },
      },
      {
        name: 'VirtualSpec$ebnf$2',
        symbols: ['VirtualSpecZip'],
        postprocess: id,
      },
      {
        name: 'VirtualSpec$ebnf$2',
        symbols: [],
        postprocess: function(d) {
          return null;
        },
      },
      {
        name: 'VirtualSpec',
        symbols: ['VirtualSpec$ebnf$1', 'VirtualSpec$ebnf$2'],
        postprocess: d => [{ fields: d[0], zip: d[1] }],
      },
      {
        name: 'VirtualSpecFields$string$1',
        symbols: [
          { literal: '\n' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: 'f' },
          { literal: 'i' },
          { literal: 'e' },
          { literal: 'l' },
          { literal: 'd' },
          { literal: 's' },
          { literal: ' ' },
          { literal: '=' },
          { literal: ' ' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'VirtualSpecFields',
        symbols: ['VirtualSpecFields$string$1', 'StringList'],
        postprocess: d => d[1],
      },
      {
        name: 'VirtualSpecZip$string$1',
        symbols: [
          { literal: '\n' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: 'z' },
          { literal: 'i' },
          { literal: 'p' },
          { literal: ' ' },
          { literal: '=' },
          { literal: ' ' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'VirtualSpecZip',
        symbols: ['VirtualSpecZip$string$1', 'String'],
        postprocess: d => d[1].toLowerCase() === 'true',
      },
      {
        name: 'Spec$string$1',
        symbols: [
          { literal: '\n' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
          { literal: ' ' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'Spec',
        symbols: ['Spec$string$1', 'SpecProp'],
        postprocess: d => d[1],
      },
      {
        name: 'SpecProp$string$1',
        symbols: [{ literal: ' ' }, { literal: '=' }, { literal: ' ' }],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'SpecProp',
        symbols: ['SpecIdent', 'SpecProp$string$1', 'SpecValue'],
        postprocess: d => ({ [d[0]]: d[2][0] }),
      },
      { name: 'SpecIdent', symbols: ['Ident'] },
      { name: 'SpecValue', symbols: ['String'] },
      { name: 'DatIdent', symbols: ['Ident'] },
      { name: 'FieldIdent', symbols: ['Ident'] },
      { name: 'Ident$ebnf$1', symbols: [/[^\n]/] },
      {
        name: 'Ident$ebnf$1',
        symbols: ['Ident$ebnf$1', /[^\n]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        },
      },
      { name: 'Ident', symbols: ['Ident$ebnf$1'], postprocess: parseString },
      { name: 'ValueExpression', symbols: ['Integer'] },
      {
        name: 'ValueExpression',
        symbols: [{ literal: "'" }, 'String', { literal: "'" }],
      },
      { name: 'String$ebnf$1', symbols: [/./] },
      {
        name: 'String$ebnf$1',
        symbols: ['String$ebnf$1', /./],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        },
      },
      { name: 'String', symbols: ['String$ebnf$1'], postprocess: parseString },
      { name: 'Integer$ebnf$1', symbols: [/[0-9]/] },
      {
        name: 'Integer$ebnf$1',
        symbols: ['Integer$ebnf$1', /[0-9]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        },
      },
      { name: 'Integer', symbols: ['Integer$ebnf$1'] },
      { name: 'StringList$ebnf$1', symbols: [] },
      {
        name: 'StringList$ebnf$1',
        symbols: ['StringList$ebnf$1', /[^\n]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        },
      },
      {
        name: 'StringList',
        symbols: ['StringList$ebnf$1'],
        postprocess: d => d[0].join('').split(',').map(s => s.trim()),
      },
    ],
    ParserStart: 'Main',
  };
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = grammar;
  } else {
    window.grammar = grammar;
  }
})();
