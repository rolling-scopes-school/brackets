module.exports = function check(str, bracketsConfig) {
  let strTable = str.split('');
  const y = bracketsConfig.length;
  const x = strTable.length;
  if (x % 2 !==0) { return false }
  for (k = 0; k < y+1; k++){
    for (z = 0; z < y; z++) {
      for (a = 0; a < x ; a++) {
        strTable = strTable.filter(element => element !== null); 
        n = strTable.length;
        for (i = 0; i < n-1 ; i++) {
          if (strTable[i] === bracketsConfig[z][0] && strTable[i+1] === bracketsConfig[z][1]) {
            delete strTable[i]; delete strTable[i+1];
          }
        }
      }
    }
  }
  if (strTable[0] === undefined) {
    return true;
  } else { return false; }
}
