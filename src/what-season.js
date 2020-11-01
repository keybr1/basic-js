const CustomError = require("../extensions/custom-error");

module.exports = function getseason(date) {
  if(!date){
    return 'Unable to determine the time of year!';
  };

  if(!date.getTime()){
    throw new Error();
  }

  let season = '';
  const month = date.getMonth();

  if(month === 0 || month === 1 || month === 11){
    return season = 'winter'
  } else if(month >= 2 && month <= 4) {
    return season = 'spring'
  } else if(month >= 5 && month <= 7) {
    return season = 'summer'
  } else if(month >= 8 && month <= 10) {
    return season = 'autumn'
  }
};
