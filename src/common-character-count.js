const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let s1Arr = Array.from(s1);
  let s2Arr = Array.from(s2);
  for (i = 0; i < s1Arr.length; i++) {
  if (s2Arr.includes(s1Arr[i])) {
        count++;
        s2Arr.splice(s2Arr.indexOf(s1Arr[i]), 1);
      }
}
return count;
}

module.exports = {
  getCommonCharacterCount
};
