const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof(str) !== 'string') {
    String(str);
  }
  
  let substr = str;

  let separator = options.hasOwnProperty("separator") ? options.separator : '+';
  let additionSeparator = options.hasOwnProperty("additionSeparator") ? options.additionSeparator : '|';
  let repeatTimes = options.hasOwnProperty("repeatTimes") ? options.repeatTimes : 0;
  let additionRepeatTimes = options.hasOwnProperty("additionRepeatTimes") ? options.additionRepeatTimes : 0;

  if (repeatTimes === undefined) {
    repeatTimes = 1;
  }

  if (additionRepeatTimes === undefined) {
    additionRepeatTimes = 1;
  }

  if (repeatTimes > 0) {
    if (options.addition !== '' && additionRepeatTimes > 0) {
      if (additionRepeatTimes === 1) {
        substr += options.addition;
      } else {
          substr += `${options.addition}`;
          for (let j = 1; j < additionRepeatTimes; j++) {
            substr += `${additionSeparator}${options.addition}`;
          }
        }
      str = substr;
    }

    for (let i = 1; i < repeatTimes; i++) {
      substr += `${separator}${str}`;
    } 
  } else {
    return substr;
  }
  
  return substr;
};
  