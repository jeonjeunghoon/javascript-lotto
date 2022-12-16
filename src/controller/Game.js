const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');
const validator = require('../utils/validator');
const convertor = require('../utils/convertor');
const UserLottos = require('../models/UserLottos');
const Lottery = require('../models/Lottery');
const Lotto = require('../Lotto');

class Game {
  #instance = {
    userLottos: null,
    lotto: null,
    lottery: null,
  };

  constructor() {
    this.#initInstance();
  }

  #initInstance() {
    this.#instance = {
      userLottos: new UserLottos(),
      lotto: null,
      lottery: new Lottery(),
    };
  }

  playGame() {
    InputView.readPrice(this.#purchaseLotto.bind(this));
  }

  #purchaseLotto(userInput) {
    this.#instance.userLottos.set(userInput);
    OutputView.printPurchasedLottos(this.#instance.userLottos.get());

    this.#setLuckyNumbers();
  }

  #setLuckyNumbers() {
    InputView.readLuckyNumbers(this.#registerLuckyNumbers.bind(this));
  }

  #registerLuckyNumbers(numbers) {
    this.#instance.lotto = new Lotto(numbers);

    InputView.readBonusNumber(this.#registerBonusNumber.bind(this));
  }

  #registerBonusNumber(number) {
    const bonus = convertor.convertStringToNumber(number);
    this.#validateBonus(bonus);

    this.#matchLottoNumbers(bonus);
  }

  #validateBonus(bonus) {
    validator.checkTruthy(bonus);
    validator.checkType(bonus, typeof 0);
    validator.checkNumberRange(bonus);
    validator.checkDuplication(bonus, this.#instance.lotto.get());
  }

  #matchLottoNumbers(bonus) {
    this.#instance.lottery.draw(
      this.#instance.lotto.get(),
      bonus,
      this.#instance.userLottos.get()
    );

    this.#calculateProfit();
  }

  #calculateProfit() {
    this.#instance.lottery.calculateProfitRate(
      this.#instance.userLottos.get().length
    );

    this.#endGame();
  }

  #endGame() {
    OutputView.printResult(this.#instance.lottery.get());
    InputView.close();
  }
}

module.exports = Game;
