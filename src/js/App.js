import View from "./View";
import Game from "./Game";

export default class App {

  constructor() {
    this.app = document.querySelector('.app')
    this.view = new View()
    this.game = new Game()
  }

  init() {
    console.log('App is loaded');
    // this.app.textContent = 'hello'
    this.view.init();
    this.game.init();
  }

}