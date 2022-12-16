const { LOTTO, PRIZE, REGEXP, MONEY } = require('../constants/values');

class Lottery {
  #result = {
    prize: [],
    profit: 0,
  };

  constructor() {
    this.#initPrize();
  }

  #initPrize() {
    this.#result.prize = Array.from({ length: PRIZE.length }, () => 0);
  }

  draw(luckyNumbers, bonus, userLottos) {
    userLottos.forEach(lotto => {
      const result = this.#matchWithBonus({
        lotto,
        bonus,
        result: this.#shiftGrade(this.#calculateGrade(luckyNumbers, lotto)),
      });
      this.#result.prize[PRIZE.length - result - 1] += 1;
    });
  }

  #calculateGrade(luckyNumbers, lotto) {
    let result = 0;
    luckyNumbers.forEach(number => {
      if (lotto.includes(number)) {
        result += 1;
      }
    });

    return result;
  }

  #shiftGrade(result) {
    let newResult = result;
    if (result !== LOTTO.count) {
      newResult -= 1;
    }

    return newResult;
  }

  #matchWithBonus({ lotto, bonus, result }) {
    let newResult = result;
    if (newResult === PRIZE.secondOrThird) {
      if (lotto.includes(bonus)) {
        newResult += 1;
      }
    }

    return newResult;
  }

  calculateProfitRate(count) {
    this.#result.profitRate = this.#addComma(
      this.#addPoint(this.#calculateProfit(), count)
    );
  }

  #calculateProfit() {
    return (
      this.#result.prize[PRIZE.first] * PRIZE.firstMoney +
      this.#result.prize[PRIZE.second] * PRIZE.secondMoney +
      this.#result.prize[PRIZE.third] * PRIZE.thirdMoney +
      this.#result.prize[PRIZE.fourth] * PRIZE.fourthMoney +
      this.#result.prize[PRIZE.fifth] * PRIZE.fifthMoney
    );
  }

  #addPoint(profit, count) {
    return ((profit / (count * MONEY.unit)) * 100).toFixed(1);
  }

  #addComma(profit) {
    return profit.replace(REGEXP.comma, ',');
  }

  get() {
    return this.#result;
  }
}

module.exports = Lottery;
