module.exports = function check(str, bracketsConfig) {
  let result = null;
  let string = '';
  let bracket1 = 0;
  
  for (let i = 0; i <= bracketsConfig.length - 1; i++) {
      string += bracketsConfig[i].join();
  }
  
  string = string.replaceAll(",", "");
  
  
  for (i = 0; i < string.length - 1; i+=2) {
      
      for (let j = 0; j < str.length; j++) {
          if (str[j] == string[i]) bracket1++;
      }
      console.log(bracket1);
      for (let j = 0; j < str.length; j++) {
          if (str[j] == string[i+1]) bracket1--;
      }

  }
    
  if (bracket1 == 0) return true;
  else return false;
  
}
