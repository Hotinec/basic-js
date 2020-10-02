const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const resultArray = members.map((member) => {
    if (typeof member === 'string') {
      let trimMember = member.trim();
      return trimMember[0].toUpperCase();
    }
  });

  return resultArray.sort().join('');
};
