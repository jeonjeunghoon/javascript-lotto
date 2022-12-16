const MissionUtils = require('@woowacourse/mission-utils');

const random = {
  pickUniqueNumbersInRange(start, end, count) {
    return MissionUtils.Random.pickUniqueNumbersInRange(start, end, count);
  },
};

module.exports = random;
