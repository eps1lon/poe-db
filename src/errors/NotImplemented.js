class NotImeplemented extends Error {
  constructor(klass, member) {
    super(`${klass}#${member} not implemented`);
  }
}

module.exports = NotImeplemented;
