import View from "./View";
import Game from "./Game";

export default class App {

  constructor() {
    this.view = new View()
    this.game = new Game()
  }

  init() {
    this.view.init();
    this.game.init();
  }

}