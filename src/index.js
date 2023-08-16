module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openingBrackets = new Set(bracketsConfig.map(pair => pair[0]));
  const closingBrackets = new Set(bracketsConfig.map(pair => pair[1]));
  const bracketPairs = Object.fromEntries(bracketsConfig);

  for (let bracket of str) {
    if (openingBrackets.has(bracket)) {
      // Handle opening brackets
      if (bracketPairs[bracket] !== bracket) {
        // Handle cases where opening and closing brackets are the same
        stack.push(bracket);
      } else {
        if (stack.length === 0 || stack[stack.length - 1] !== bracket) {
          stack.push(bracket);
        } else {
          stack.pop();
        }
      }
    } else if (closingBrackets.has(bracket)) {
      // Handle closing brackets
      if (stack.length === 0 || bracketPairs[stack[stack.length - 1]] !== bracket) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
};

console.log(check('()', [['(', ')']])); // true
console.log(check('((()))()', [['(', ')']])); // true
console.log(check('())(', [['(', ')']])); // false
console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']])); // true
console.log(check('[(])', [['(', ')'], ['[', ']']])); // false
console.log(check('[]()', [['(', ')'], ['[', ']']])); // true
console.log(check('[]()(', [['(', ')'], ['[', ']']])); // false
console.log(check('||', [['|', '|']])); // true
console.log(check('|()|', [['(', ')'], ['|', '|']])); // true
console.log(check('|(|)', [['(', ')'], ['|', '|']])); // false
console.log(check('|()|(||)||', [['(', ')'], ['|', '|']])); // true
