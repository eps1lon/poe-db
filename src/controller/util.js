const intOrUndefined = val => {
  const number = parseInt(val, 10);

  if (Number.isNaN(number)) {
    return undefined;
  } else {
    return number;
  }
};

const intOrDefault = (val, otherwise) => {
  const number = intOrUndefined(val);
  if (number === undefined) {
    return otherwise;
  } else {
    return number;
  }
};

module.exports = {
  intOrDefault,
};
