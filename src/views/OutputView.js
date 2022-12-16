const console = require('../utils/console');
const convertor = require('../utils/convertor');
const { MESSAGE_SYSTEM } = require('../constants/message');

const OutputView = {
  print(message) {
    console.print(message);
  },

  printPurchasedLottos(lottos) {
    const count = lottos.length;
    const printableLottos = convertor.convertLottosToPrintableLottos(lottos);

    console.print(`\n${count}${MESSAGE_SYSTEM.COUNT}`);
    printableLottos.forEach(lotto => console.print(lotto));
  },

  printResult(result) {
    console.print(MESSAGE_SYSTEM.STATS);
    console.print(MESSAGE_SYSTEM.DIVISION_LINE);
    console.print(`${MESSAGE_SYSTEM.FIFTH}${result.prize[4]}개`);
    console.print(`${MESSAGE_SYSTEM.FOURTH}${result.prize[3]}개`);
    console.print(`${MESSAGE_SYSTEM.THIRD}${result.prize[2]}개`);
    console.print(`${MESSAGE_SYSTEM.SECOND}${result.prize[1]}개`);
    console.print(`${MESSAGE_SYSTEM.FIRST}${result.prize[0]}개`);
    console.print(`${MESSAGE_SYSTEM.PROFIT_RATE}${result.profitRate}%입니다.`);
  },
};

module.exports = OutputView;
