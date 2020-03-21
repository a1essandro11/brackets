module.exports = function check(str, bracketsConfig) {
  while (bracketsConfig.some(item => str.includes(item.join('')))) {
    bracketsConfig.forEach(item => {
      str = str.replace(item.join(''), '');
    });
  }
  return str ? false : true;
}
