module.exports = function check(str, bracketsConfig) {
  str = str.split('');
  for (let i = 0; i <= str.length; i++) {
    bracketsConfig.map(bracket => {
      if (str[i] === bracket[0] && str[i + 1] === bracket[1]) {
        str.splice(i, 2);
        i = i - 2;
      }
    });
  }

  if (str.length !== 0) {
    return false;
  } else {
    return true;
  }
}
