function filter_list(l) {
  let onlyNumbers = l.filter(element => typeof element === 'number'
);
  return onlyNumbers
}