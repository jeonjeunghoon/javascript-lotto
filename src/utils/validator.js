const { MESSAGE_ERROR } = require('../constants/message');
const { REGEXP, MONEY, LOTTO } = require('../constants/values');

const validator = {
  checkTruthy(value) {
    if (!value) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkType(value, type) {
    if (typeof value !== type) {
      throw new Error(MESSAGE_ERROR.TYPE);
    }
  },

  checkInput(input) {
    if (!REGEXP.onlyNumber.test(input)) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkUnitOfMoney(money) {
    if (money % MONEY.unit !== 0) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkNumberRange(number) {
    if (number < LOTTO.minNumber || number > LOTTO.maxNumber) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkDuplication(bonus, lucky) {
    if (lucky.includes(bonus)) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },
};

module.exports = validator;
