const REGEXP = {
  onlyNumber: /^[0-9]+$/,
  comma: /\B(?=(\d{3})+(?!\d))/g,
};

const MONEY = {
  unit: 1000,
};

const LOTTO = {
  minNumber: 1,
  maxNumber: 45,
  count: 6,
};

const PRIZE = {
  length: 7,
  secondOrThird: 4,
  first: 0,
  second: 1,
  third: 2,
  fourth: 3,
  fifth: 4,
  firstMoney: 2000000000,
  secondMoney: 30000000,
  thirdMoney: 1500000,
  fourthMoney: 50000,
  fifthMoney: 5000,
};

module.exports = {
  REGEXP,
  MONEY,
  LOTTO,
  PRIZE,
};
