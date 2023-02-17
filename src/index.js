const bracketsConfig = [
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
  ["|", "|"],
  ["=", "="],
];
module.exports = function check(str, bracketsConfig) {
  let isOpeningBracket = (bracket) => {
    for (let x = 0; x < bracketsConfig.length; x++) {
      //приходит открывающая возвращаем true
      if (bracket === bracketsConfig[x][0]) {
        return true;
      } else if (bracket === bracketsConfig[x][1]) {
        return false;
      }
    }
    return false;
  };
  let isClosingBracket = (bracket) => {
    for (let x = 0; x < bracketsConfig.length; x++) {
        //приходит закрывающая возвращаем true
      if (bracket === bracketsConfig[x][1]) {
        return true;
      }else if (bracket === bracketsConfig[x][0]) {
        return false;
      } 
    }
    return false;
  };
  let getPair = (bracket) => {
    for (let x = 0; x < bracketsConfig.length; x++) {
      if (bracket === bracketsConfig[x][1]) {
        return bracketsConfig[x][0];
      } else if (bracket === bracketsConfig[x][0]) {
        return bracketsConfig[x][1];
      }
    }
  };
  let stack = [];
  // ну если в нем ничего нет то там undefined а андефайнд скобочки мне придти не может
  for (let i = 0; i < str.length; i++) {
    if (isClosingBracket(str[i])) {  //пришла закрывающая
      let lastOpening = stack[stack.length-1]; // достали из стека последнюю открывающу
      if (lastOpening !== getPair(str[i])) { // сравниваем посл. открывающую  с текущей закрывающей на неравенство что смысла не имеет
        if (isOpeningBracket(str[i])) { // проверили может ли быть наша скобка левой
          stack.push(str[i]); // и новую левую пару
        }
        else { 
          return false;
        }
      }
      else {
        stack.pop();
      }
    } else {
      stack.push(str[i]);
    }
  }
  return stack.length === 0;
};

// console.log(check("[](|()|)|", bracketsConfig));

