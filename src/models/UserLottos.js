const random = require('../utils/random');
const convertor = require('../utils/convertor');
const validator = require('../utils/validator');
const { MONEY, LOTTO } = require('../constants/values');

class UserLottos {
  #lottos;

  constructor() {
    this.#initLottos();
  }

  #initLottos() {
    this.#lottos = [];
  }

  set(userInput) {
    this.#validateUserInput(userInput);
    const money = convertor.convertStringToNumber(userInput);
    this.#validateMoney(money);
    this.#generate(money);
  }

  #validateUserInput(userInput) {
    validator.checkTruthy(userInput);
    validator.checkType(userInput, typeof 'string');
    validator.checkInput(userInput);
  }

  #validateMoney(money) {
    validator.checkUnitOfMoney(money);
  }

  #generate(money) {
    for (let iter = 0; iter < money; iter += MONEY.unit) {
      this.#lottos.push(this.#generateLotto());
    }
  }

  #generateLotto() {
    return random
      .pickUniqueNumbersInRange(LOTTO.minNumber, LOTTO.maxNumber, LOTTO.COUNT)
      .sort((a, b) => a - b);
  }

  get() {
    return this.#lottos;
  }
}

module.exports = UserLottos;
