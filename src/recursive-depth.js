const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {
    if (!array.some(el => Array.isArray(el))) {
      return 1;
    } else {
      array = array.reduce((a, b) => a.concat(b), []);
      return 1 + this.calculateDepth(array)
    }
  }
};