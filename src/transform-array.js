const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = arr.slice();
  let res = [];

  if (Array.isArray(arr)) {
    if (arr.length === 0) {
      return [];
    } else {
  
      for (let i = 0; i < result.length; i++) {
        if (result[i] === '--discard-next') {
          if (result[i + 1] || result[i + 1] === false || isNaN(result[i + 1]) || result[i + 1] === 0) {
                delete result[i + 1];
                result.splice(i, 1);
            } else {
              result.splice(i, 1);
            }
        } else if (result[i] === '--discard-prev') {
            if (result[i - 1] !== undefined) {
                delete result[i - 1];
                result.splice(i, 1); 
            } else {
              result.splice(i, 1);
            }
    
        } else if (result[i] === '--double-next') {
            if (result[i + 1] !== undefined) {
              result[i] = result[i + 1];
            } else {
              result.splice(i, 1);
            }
    
        } else if (result[i] === '--double-prev') {
            if (result[i - 1] !== undefined) {
              result[i] = result[i - 1];
            } else {
              result.splice(i, 1);
            }
        }
    
    }
    
    for(let j = 0; j < result.length; j++) {
        if (result[j] !== undefined) {
            res.push(result[j]);
        }
    }

    return res;
  }
  } else {
    
    throw 'Error';
  }
};
