module.exports = function check(str, bracketsConfig) {
  let stack = [];
  bracketsConfig.map((el) => {
    stack.push(el.join(""));
  });

  let i = 0;
  do {
    let current = stack[i];
    if (str.includes(current)) {
      str = str.replace(current, "");
      i = -1;
    }
    i++;
  } while (i < stack.length);

  return str.length === 0;
};
