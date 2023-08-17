module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const symbolPairs = Object.fromEntries(bracketsConfig);

  for (let symbol of str) {
    if (symbolPairs[symbol]) {
      if (symbolPairs[symbol] === symbol) {
        // Handle cases where opening and closing symbols are the same
        if (stack.length === 0 || stack[stack.length - 1] !== symbol) {
          stack.push(symbol);
        } else {
          stack.pop();
        }
      } else {
        // Handle opening symbols
        stack.push(symbol);
      }
    } else {
      // Handle closing symbols
      if (stack.length === 0 || symbolPairs[stack.pop()] !== symbol) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(check('()', [['(', ')']])); // true
console.log(check('[[[]]][]', [['[', ']']])); // true
console.log(check('][', [['[', ']']])); // false
console.log(check('{}{}', [['{', '}']])); // true
console.log(check('{{{}}}', [['{', '}']])); // true
console.log(check('}{', [['{', '}']])); // false
console.log(check('{{}}{}', [['{', '}'], ['{', '}']])); // true
console.log(check('||', [['|', '|']])); // true
console.log(check('|()|', [['(', ')'], ['|', '|']])); // true
console.log(check('|(|)', [['(', ')'], ['|', '|']])); // false
console.log(check('|()|(||)||', [['(', ')'], ['|', '|']])); // true
