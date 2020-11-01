const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members === null) return false;
  let newTeam = [];
    for(let i = 0; i < members.length; i++) {
      if(typeof members[i] === 'string') {
        let e = members[i].trim().substr(0, 1).toUpperCase();
        newTeam.push(e);
        newTeam.sort();
        }
      }
  return newTeam.join('');
};
