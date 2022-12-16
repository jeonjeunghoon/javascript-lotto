const convertor = require('./utils/convertor');
const validator = require('./utils/validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    const luckyNumbers = convertor.convertLuckyNumberToNumbers(numbers);
    this.validate(luckyNumbers);
    this.#numbers = luckyNumbers;
  }

  validate(luckyNumbers) {
    if (luckyNumbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    luckyNumbers.forEach(value => validator.checkNumberRange(value));
  }

  get() {
    return this.#numbers;
  }
}

module.exports = Lotto;
