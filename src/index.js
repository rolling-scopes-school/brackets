module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 != 0) return false;


  let brackets = [];
   
  for (let i = 0; i < str.length; i++) {
     for (let j = 0; j < bracketsConfig.length; j++) {
        let elemStart = bracketsConfig[j][0];
        let elemEnd = bracketsConfig[j][1];

        if (str[i] === elemStart) {
           if (str[i] === elemEnd && brackets[brackets.length - 1] === elemEnd) {
              brackets.pop();
           } else {
              brackets.push(elemStart);
           }
          
        } else if (str[i] === elemEnd ) {
           if (brackets.length === 0) return false;
           if (brackets[brackets.length - 1] === elemStart) {
              brackets.pop();
              
           }   
        }
     }
  }

  if (brackets.length > 0) return false;

  return true;


  
}
