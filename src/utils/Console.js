const MissionUtils = require('@woowacourse/mission-utils');

const console = {
  print(message) {
    MissionUtils.Console.print(message);
  },

  readline(question, cbFunc) {
    MissionUtils.Console.readLine(question, cbFunc);
  },

  close() {
    MissionUtils.Console.close();
  },
};

module.exports = console;
