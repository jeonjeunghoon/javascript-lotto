const Game = require('./controller/Game');

class App {
  #game;

  constructor() {
    this.#game = new Game();
  }

  play() {
    this.#game.playGame();
  }
}

const app = new App();
app.play();

module.exports = App;
