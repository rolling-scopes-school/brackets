module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openingBrackets = new Set();
  const closingBrackets = new Set();
  const matchingBrackets = {};

  for (const [open, close] of bracketsConfig) {
    openingBrackets.add(open);
    closingBrackets.add(close);
    matchingBrackets[close] = open;
  }

  for (const char of str) {
    if (openingBrackets.has(char)) {
      if (char !== matchingBrackets[char] || !stack.includes(char)) {
        stack.push(char);
      } else {
        const lastBracket = stack.pop();
        if (lastBracket !== char) {
          return false;
        }
      }
    } else if (closingBrackets.has(char)) {
      if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
