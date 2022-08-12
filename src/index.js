module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = []   //['(', '{'];
  const BRACKETS_PAIR = {};

  //BRACKETS_PAIR.q = 2

  for (let i = 0; i < bracketsConfig.length; i++) {
    let key = bracketsConfig[i][1];    
    let value = bracketsConfig[i][0];
    OPEN_BRACKETS.push(bracketsConfig[i][0])
    BRACKETS_PAIR[key] = value 
    //console.log(BRACKETS_PAIR)
    
  }

  //console.log(OPEN_BRACKETS)
  //console.log(BRACKETS_PAIR)

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    let topElement = stack[stack.length - 1];


    if(currentSymbol === topElement && BRACKETS_PAIR[currentSymbol] === currentSymbol){
      stack.pop()
    }else if (OPEN_BRACKETS.includes(currentSymbol)) {
        stack.push(currentSymbol);
      }else {
        if (stack.length === 0) {
        //console.log(stack)

          return false;
        }
        if (BRACKETS_PAIR[currentSymbol] === topElement) {
          stack.pop();
        }
      }
    
    /*if (OPEN_BRACKETS.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return console.log(false + '1');
      }

      let topElement = stack[stack.length - 1];

      if (BRACKETS_PAIR[currentSymbol] === topElement) {
        stack.pop();
      } else {
        console.log(stack)
        console.log(BRACKETS_PAIR[currentSymbol])
        console.log(topElement)
        return console.log(false + '2');
      }
    }*/
  }
  //console.log(stack)

  return stack.length === 0;


  
}

/*function check(str, bracketsConfig) {

  const OPEN_BRACKETS = []   //['(', '{'];
  const BRACKETS_PAIR = {};

  //BRACKETS_PAIR.q = 2

  for (let i = 0; i < bracketsConfig.length; i++) {
    let key = bracketsConfig[i][1];    
    let value = bracketsConfig[i][0];
    OPEN_BRACKETS.push(bracketsConfig[i][0])
    BRACKETS_PAIR[key] = value 
    //console.log(BRACKETS_PAIR)
    
  }

  //console.log(OPEN_BRACKETS)
  //console.log(BRACKETS_PAIR)

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    let topElement = stack[stack.length - 1];


    if(currentSymbol === topElement && BRACKETS_PAIR[currentSymbol] === currentSymbol){
      stack.pop()
    }else if (OPEN_BRACKETS.includes(currentSymbol)) {
        stack.push(currentSymbol);
      }else {
        if (stack.length === 0) {
        console.log(stack)

          return console.log(false + '1');
        }
        if (BRACKETS_PAIR[currentSymbol] === topElement) {
          stack.pop();
        }
      }
    
    /*if (OPEN_BRACKETS.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return console.log(false + '1');
      }

      let topElement = stack[stack.length - 1];

      if (BRACKETS_PAIR[currentSymbol] === topElement) {
        stack.pop();
      } else {
        console.log(stack)
        console.log(BRACKETS_PAIR[currentSymbol])
        console.log(topElement)
        return console.log(false + '2');
      }
    }
  }
  console.log(stack)

  return console.log(stack.length === 0);

}*/

/*check('||', [['|', '|']]) // -> true
check('|()|', [['(', ')'], ['|', '|']]) // -> true
check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true

check('()', [['(', ')']]) // -> true
check('((()))()', [['(', ')']]) // -> true
check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
check('[]()', [['(', ')'], ['[', ']']]) // -> true
check('())(', [['(', ')']]) // -> false
check('[(])', [['(', ')'], ['[', ']']]) // -> false
check('[]()(', [['(', ')'], ['[', ']']]) // -> false
check('|(|)', [['(', ')'], ['|', '|']]) // -> false*/