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

const propChain = (obj, chain) =>
  chain.split('.').reduce((obj, prop) => obj[prop], obj);

const filterObj = (obj, filter_fn) =>
  entriesToObj(Object.entries(obj).filter(filter_fn));

const removeProp = (obj, prop) => filterObj(obj, ([other]) => other !== prop);

module.exports = {
  entriesToObj,
  filterObj,
  propChain,
  removeProp,
  throwOnError,
};
