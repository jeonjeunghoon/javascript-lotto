const GameInput = require('../views/GameInput');
const GameOutput = require('../views/GameOutput');
const Player = require('../domains/Player');
const WinningNumber = require('../domains/WinningNumber');
const Lotto = require('../domains/Lotto');
const Console = require('../domains/Console');

class Game {
  #instance = {};

  playLotto() {
    GameInput.enter(GameOutput.message.purchaseAmount, this.#purchaseLotto.bind(this));
  }

  #purchaseLotto(purchaseAmount) {
    this.#instance.player = new Player(purchaseAmount);
    GameOutput.printLottos(this.#instance.player.getPurchaseResult());

    GameInput.enter(GameOutput.message.sixNumbers, this.#registerSixNumbers.bind(this));
  }

  #registerSixNumbers(sixNumbers) {
    this.#instance.winningNumber = new WinningNumber();
    this.#instance.winningNumber.registerSixNumbers(sixNumbers);

    GameInput.enter(GameOutput.message.bonus, this.#registerBonus.bind(this));
  }

  #registerBonus(bonus) {
    this.#instance.winningNumber.registerBonus(bonus);

    this.#calculateLottoResult();
  }

  #calculateLottoResult() {
    this.#instance.lotto = new Lotto(this.#instance.winningNumber.getSixNumbers());

    const result = this.#instance.lotto.calculateResult(
      this.#instance.player.getLottos(),
      this.#instance.winningNumber.getBonus()
    );
    const profit = this.#instance.player.calculateProfit(result);
    GameOutput.printResult(result, profit);

    this.#endGame();
  }

  #endGame() {
    Console.close();
  }
}

module.exports = Game;
