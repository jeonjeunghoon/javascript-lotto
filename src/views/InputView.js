const console = require('../utils/console');
const { MESSAGE_QUESTION } = require('../constants/message');

const InputView = {
  readPrice(purchaseLottos) {
    console.readline(MESSAGE_QUESTION.PRICE, purchaseLottos);
  },

  readLuckyNumbers(registerLuckyNumbers) {
    console.readline(MESSAGE_QUESTION.LUCKY, registerLuckyNumbers);
  },

  readBonusNumber(registerBonusNumber) {
    console.readline(MESSAGE_QUESTION.BONUS, registerBonusNumber);
  },

  close() {
    console.close();
  },
};

module.exports = InputView;
