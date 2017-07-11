// returns a function which is only executed if error is falsy
// otherwise it throws the value of error
// used for simple 'void' callbacks since calling functions without
// a provided callback is deprecated in node v8
const throwOnError = cb => (error, ...args) => {
  if (error) {
    throw error;
  } else if (cb && typeof cb === 'function') {
    cb(...args);
  }
};

// inverse of Object.entries
const entriesToObj = entries =>
  entries.reduce(
    (obj, entry) => Object.assign(obj, { [entry[0]]: entry[1] }),
    {},
  );

module.exports = { entriesToObj, throwOnError };
