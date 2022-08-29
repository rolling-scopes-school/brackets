module.exports = function check(str, bracketsConfig) {
  let a = [str, bracketsConfig].toString();

  let allBrackets = ['[', '{', '(', ']', '}', ')','|']
  let open_brackets = ['[', '{', '(']
  let library ={
    ['}'] : '{',
    [')'] : '(',
    [']'] : '[',
    ['|'] : '|',
  }
  let stack = [];
  let strLast ="";

  for (let i = 0; i< a.length; i++){
    if (allBrackets.includes(a[i]) === true) {
      strLast = strLast + a[i];
    }
  }

 //

  for (let i = 0; i< strLast.length; i++){

    let currantSimvol = strLast[i];

    if (open_brackets.includes(currantSimvol)){
      stack.push(currantSimvol);
    }
    else {
     
                  if (stack.length === 0){ 
                      if (currantSimvol === '|')
                        stack.push(currantSimvol);
                      else{
                        return false;
                      }
                  }                

           let topElement = stack[stack.length - 1];
           
                  if (library[currantSimvol] === topElement){
                      stack.pop();
                  }
                  if (library[currantSimvol] !== topElement && currantSimvol === '|'){
                    stack.push(currantSimvol);
                  }
                  
          }
  }
  
  return (stack.length === 0 ? true : false);
}