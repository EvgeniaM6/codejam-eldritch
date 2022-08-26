import { createElem } from './utility/createElem'

export default class View {

  constructor() {
    this.app = document.querySelector('.app')
    this.settingsBlock = createElem('div', 'settings-block', null, null, this.app);
    this.ancientsBlock = createElem('div', 'ancients-block', null, null, this.settingsBlock);
    this.difficultiesBlock = createElem('div', 'difficulties-block', null, null, this.settingsBlock);
    this.buttonBlock = createElem('div', 'button-block', null, null, this.app);
    this.gameBlock = createElem('div', 'game-block', null, null, this.app);

    // ancients block
    this.ancientFirst = createElem('div', 'ancients ancient-first', null, null, this.ancientsBlock);
    this.ancientSecond = createElem('div', 'ancients ancient-second', null, null, this.ancientsBlock);
    this.ancientThird = createElem('div', 'ancients ancient-third', null, null, this.ancientsBlock);
    this.ancientFourth = createElem('div', 'ancients ancient-fourth', null, null, this.ancientsBlock);
    this.ancientSelected = 0;
    
    // difficulties block
    this.difficultySuperEasy = createElem('div', 'difficulties difficulty-super-easy', null, 'Очень легкий', this.difficultiesBlock);
    this.difficultyEasy = createElem('div', 'difficulties difficulty-easy', null, 'Легкий', this.difficultiesBlock);
    this.difficultyNormal = createElem('div', 'difficulties difficulty-normal', null, 'Средний', this.difficultiesBlock);
    this.difficultyHard = createElem('div', 'difficulties difficulty-hard', null, 'Высокий', this.difficultiesBlock);
    this.difficultySuperHard = createElem('div', 'difficulties difficulty-super-hard', null, 'Очень высокий', this.difficultiesBlock);
    this.difficultySelected = '';
    
    // button block
    this.buttonMix = createElem('div', 'button-mix', null, 'Замешать колоду', this.buttonBlock);

    // game block
    this.cardsBlock = createElem('div', 'cards-block', null, null, this.gameBlock);
    
    this.amountCards = createElem('div', 'amount-cards', null, null, this.cardsBlock);
    this.cards = createElem('div', 'cards', null, null, this.cardsBlock);

    // amount cards block
    this.firstStageAmount = createElem('div', 'amount first-stage', null, null, this.amountCards);
    this.titleFirstStageAmount = createElem('div', 'title-amount', null, 'Этап I:', this.firstStageAmount);
    this.markBlockFirstSt = createElem('div', 'mark-block', null, null, this.firstStageAmount);
    this.markBlockGreenFirstSt = createElem('div', 'marks mark-green', null, null, this.markBlockFirstSt);
    this.markBlockBrownFirstSt = createElem('div', 'marks mark-brown', null, null, this.markBlockFirstSt);
    this.markBlockBlueFirstSt = createElem('div', 'marks mark-blue', null, null, this.markBlockFirstSt);

    this.secondStageAmount = createElem('div', 'amount second-stage', null, null, this.amountCards);
    this.titleSecondStageAmount = createElem('div', 'title-amount', null, 'Этап II:', this.secondStageAmount);
    this.markBlockSecondSt = createElem('div', 'mark-block', null, null, this.secondStageAmount);
    this.markBlockGreenSecondSt = createElem('div', 'marks mark-green', null, null, this.markBlockSecondSt);
    this.markBlockBrownSecondSt = createElem('div', 'marks mark-brown', null, null, this.markBlockSecondSt);
    this.markBlockBlueSecondSt = createElem('div', 'marks mark-blue', null, null, this.markBlockSecondSt);
    
    this.thirdStageAmount = createElem('div', 'amount third-stage', null, null, this.amountCards);
    this.titleThirdStageAmount = createElem('div', 'title-amount', null, 'Этап III:', this.thirdStageAmount);
    this.markBlockThirdSt = createElem('div', 'mark-block', null, null, this.thirdStageAmount);
    this.markBlockGreenThirdSt = createElem('div', 'marks mark-green', null, null, this.markBlockThirdSt);
    this.markBlockBrownThirdSt = createElem('div', 'marks mark-brown', null, null, this.markBlockThirdSt);
    this.markBlockBlueThirdSt = createElem('div', 'marks mark-blue', null, null, this.markBlockThirdSt);
    
    // cards block
    this.cardsClosed = createElem('div', 'cards-closed', null, null, this.cards);
    this.cardsOpen = createElem('div', 'cards-open', null, null, this.cards);

  }

  init() {
    Array.from(document.querySelectorAll('.ancients')).forEach((item) => {item.addEventListener('click', (event) => this.selectAncient(event))})
    Array.from(document.querySelectorAll('.difficulties')).forEach((item) => {item.addEventListener('click', (event) => this.selectDifficulty(event))})
  }

  selectAncient(event) {
    Array.from(document.querySelectorAll('.ancients')).forEach((item) => {item.classList.remove('ancients_selected')})
    if (event.target.classList.contains('ancient-first')) {
      this.ancientFirst.classList.add('ancients_selected')
      this.ancientSelected = 1;
    } else if (event.target.classList.contains('ancient-second')) {
      this.ancientSecond.classList.add('ancients_selected')
      this.ancientSelected = 2;
    } else if (event.target.classList.contains('ancient-third')) {
      this.ancientThird.classList.add('ancients_selected')
      this.ancientSelected = 3;
    } else if (event.target.classList.contains('ancient-fourth')) {
      this.ancientFourth.classList.add('ancients_selected')
      this.ancientSelected = 4;
    }
  }

  selectDifficulty(event) {
    Array.from(document.querySelectorAll('.difficulties')).forEach((item) => {item.classList.remove('difficulties_selected')})
    if (event.target.classList.contains('difficulty-super-easy')) {
      this.difficultySuperEasy.classList.add('difficulties_selected')
      this.difficultySelected = 'super-easy';
    } else if (event.target.classList.contains('difficulty-easy')) {
      this.difficultyEasy.classList.add('difficulties_selected')
      this.difficultySelected = 'easy';
    } else if (event.target.classList.contains('difficulty-normal')) {
      this.difficultyNormal.classList.add('difficulties_selected')
      this.difficultySelected = 'normal';
    } else if (event.target.classList.contains('difficulty-hard')) {
      this.difficultyHard.classList.add('difficulties_selected')
      this.difficultySelected = 'hard';
    } else if (event.target.classList.contains('difficulty-super-hard')) {
      this.difficultySuperHard.classList.add('difficulties_selected')
      this.difficultySelected = 'super-hard';
    }
  }

}