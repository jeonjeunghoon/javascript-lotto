const convertor = {
  convertStringToNumber(string) {
    return parseInt(string, 10);
  },

  convertLottosToPrintableLottos(lottos) {
    return lottos.map(lotto => {
      return `[${lotto.join(', ')}]`;
    });
  },

  convertLuckyNumberToNumbers(luckyNumber) {
    return luckyNumber.split(',').map(value => parseInt(value, 10));
  },
};

module.exports = convertor;
