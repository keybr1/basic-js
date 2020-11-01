const CustomError = require("../extensions/custom-error");

const chainMaker = {
  string: [],
 
  getLength() {
    console.log(this.string.length);
    return this.string.length;
  },
  addLink(value = '') {
    if (!this.string.length){
      this.string.push(`( ${value} )`);
    }else {
      this.string.push('~~');
      this.string.push(`( ${value} )`);
    }; 

    return this;
  },
  removeLink(position) {
    if (!position || !Number.isInteger(position) ||  position < 0 || (position + (position - 3)) >= this.string.length){
      this.string = [];
      throw new Error();
    }else {
      let k = position + (position - 2) - 1;
      (position === 1) ? this.string.splice(0, 2) : this.string.splice(k, 2);

      return this;
    };
  },
  reverseChain() {
    this.string = this.string.reverse();

    return this;
  },
  finishChain() {
    let a = this.string.join('');
    this.string = [];

    return a;
  }
};

module.exports = chainMaker;
