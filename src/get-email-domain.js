const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  emailArray = Array.from(email);
  for (let i = 0; i < emailArray.length; i++) {
    let index = emailArray.lastIndexOf('@');
    let domain = emailArray.slice(index+1).join('');
    return domain;
  }
}

module.exports = {
  getEmailDomain
};
