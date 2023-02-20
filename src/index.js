module.exports = function check(str, bracketsConfig) {
 
  
  const newStr = [];
  const myFilter = [];
  for(let i = 0; i < str.length; i++){
      if(str[i] === '|') {
      myFilter.push(str[i])
    } else {
      newStr.push(str[i]);
    }
  }
    if(myFilter.length % 2 !== 0){
     return false;
    }

  const openBrackets = ['(', '{', '[',]
  const bracketsPair = {
    [')']: '(',
    ['}']: '{',
    [']']: '[',
  }
 let stack = [];
for(let i = 0; i < newStr.length; i++){
  let currElement = newStr[i];
  if (openBrackets.includes(currElement)){
stack.push(currElement)} else {
  if (stack.length === 0){
return false;
}
let topElement = stack[stack.length - 1];
if (bracketsPair[currElement] === topElement){
stack.pop()
} else {
  return false;
}
}
}

return stack.length === 0;
}
