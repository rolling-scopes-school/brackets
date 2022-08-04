module.exports = function check(str, bracketsConfig) {
  
  
    let stack = [];

      for (let i = 0; i < str.length; i++) {
      let curSum = str[i];
      
      if (bracketsConfig.find(el => el[1] === curSum) && stack.length !== 0) {
        
        if (stack.length === 0) {
          
          return false;
        }

        let topElement = stack[stack.length - 1];
        
        bracketsConfig.forEach((el) => {
          if (el[1] === curSum) {
           
            if (topElement === el[0]) {
             
              stack.pop();
              
            } else {
                if (el[1] === el[0]) {
                    stack.push(el[1])
                }
              return false;
            }
          }
        })
      } else {
        stack.push(curSum);     
      }
    }
    return stack.length === 0
  }
