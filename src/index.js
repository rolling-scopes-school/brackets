module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openingSymbols = new Set(bracketsConfig.map(pair => pair[0]));
  const closingSymbols = new Set(bracketsConfig.map(pair => pair[1]));
  const symbolPairs = Object.fromEntries(bracketsConfig);

  for (let symbol of str) {
    if (openingSymbols.has(symbol)) {
      // Handle opening symbols
      if (symbolPairs[symbol] !== symbol) {
        // Handle cases where opening and closing symbols are the same
        stack.push(symbol);
      } else {
        if (stack.length === 0 || stack[stack.length - 1] !== symbol) {
          stack.push(symbol);
        } else {
          stack.pop();
        }
      }
    } else if (closingSymbols.has(symbol)) {
      // Handle closing symbols
      if (stack.length === 0 || symbolPairs[stack[stack.length - 1]] !== symbol) {
        return false;
      }
      stack.pop();
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
