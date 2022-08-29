import { createElem } from './utility/createElem'

export default class View {

  constructor() {
    this.app = document.querySelector('.app')
    this.settingsBlock = createElem('div', 'settings-block', null, null, this.app);
    this.ancientsBlock = createElem('div', 'ancients-block', null, null, this.settingsBlock);
    this.difficultiesBlock = createElem('div', 'difficulties-block difficulties-block_disabled', null, null, this.settingsBlock);
    this.buttonBlock = createElem('div', 'button-block button-block_disabled', null, null, this.app);
    this.gameBlock = createElem('div', 'game-block game-block_disabled', null, null, this.app);

    // ancients block
    this.ancientFirst = createElem('div', 'ancients ancient-first', {title: 'Выберете Древнего'}, null, this.ancientsBlock);
    this.ancientFirstBtn = createElem('div', 'button-ancient button-ancient_first', null, null, this.ancientFirst);
    this.ancientSecond = createElem('div', 'ancients ancient-second', {title: 'Выберете Древнего'}, null, this.ancientsBlock);
    this.ancientSecondBtn = createElem('div', 'button-ancient button-ancient_second', null, null, this.ancientSecond);
    this.ancientThird = createElem('div', 'ancients ancient-third', {title: 'Выберете Древнего'}, null, this.ancientsBlock);
    this.ancientThirdBtn = createElem('div', 'button-ancient button-ancient_third', null, null, this.ancientThird);
    this.ancientFourth = createElem('div', 'ancients ancient-fourth', {title: 'Выберете Древнего'}, null, this.ancientsBlock);
    this.ancientFourthBtn = createElem('div', 'button-ancient button-ancient_fourth', null, null, this.ancientFourth);
    this.ancientSelected = 0;
    
    // difficulties block
    this.difficultySuperEasy = createElem('div', 'difficulties difficulty-super-easy', {title: 'Выберете Уровень'}, 'Очень легкий', this.difficultiesBlock);
    this.difficultyEasy = createElem('div', 'difficulties difficulty-easy', {title: 'Выберете Уровень'}, 'Легкий', this.difficultiesBlock);
    this.difficultyNormal = createElem('div', 'difficulties difficulty-normal', {title: 'Выберете Уровень'}, 'Средний', this.difficultiesBlock);
    this.difficultyHard = createElem('div', 'difficulties difficulty-hard', {title: 'Выберете Уровень'}, 'Высокий', this.difficultiesBlock);
    this.difficultySuperHard = createElem('div', 'difficulties difficulty-super-hard', {title: 'Выберете Уровень'}, 'Очень высокий', this.difficultiesBlock);
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
    this.markBlockGreenFirstSt = createElem('div', 'marks mark-first-stage mark-green', null, null, this.markBlockFirstSt);
    this.markBlockBrownFirstSt = createElem('div', 'marks mark-first-stage mark-brown', null, null, this.markBlockFirstSt);
    this.markBlockBlueFirstSt = createElem('div', 'marks mark-first-stage mark-blue', null, null, this.markBlockFirstSt);

    this.secondStageAmount = createElem('div', 'amount second-stage', null, null, this.amountCards);
    this.titleSecondStageAmount = createElem('div', 'title-amount', null, 'Этап II:', this.secondStageAmount);
    this.markBlockSecondSt = createElem('div', 'mark-block', null, null, this.secondStageAmount);
    this.markBlockGreenSecondSt = createElem('div', 'marks mark-second-stage mark-green', null, null, this.markBlockSecondSt);
    this.markBlockBrownSecondSt = createElem('div', 'marks mark-second-stage mark-brown', null, null, this.markBlockSecondSt);
    this.markBlockBlueSecondSt = createElem('div', 'marks mark-second-stage mark-blue', null, null, this.markBlockSecondSt);
    
    this.thirdStageAmount = createElem('div', 'amount third-stage', null, null, this.amountCards);
    this.titleThirdStageAmount = createElem('div', 'title-amount', null, 'Этап III:', this.thirdStageAmount);
    this.markBlockThirdSt = createElem('div', 'mark-block', null, null, this.thirdStageAmount);
    this.markBlockGreenThirdSt = createElem('div', 'marks mark-third-stage mark-green', null, null, this.markBlockThirdSt);
    this.markBlockBrownThirdSt = createElem('div', 'marks mark-third-stage mark-brown', null, null, this.markBlockThirdSt);
    this.markBlockBlueThirdSt = createElem('div', 'marks mark-third-stage mark-blue', null, null, this.markBlockThirdSt);
    
    // cards block
    this.cardsClosed = createElem('div', 'cards-closed', {title: 'Возьмите карту'}, null, this.cards);
    this.cardsOpen = createElem('div', 'cards-open', null, null, this.cards);
  }

  init() {
    document.querySelectorAll('.ancients').forEach((item) => {item.addEventListener('click', (event) => this.selectAncient(event))})
    document.querySelectorAll('.difficulties').forEach((item) => {item.addEventListener('click', (event) => this.selectDifficulty(event))})
    document.querySelectorAll('.button-ancient').forEach((item) => {item.addEventListener('click', (event) => this.openCloseAncient(event))})
  }

  selectAncient(event) {
    document.querySelectorAll('.ancients').forEach((item) => {item.classList.remove('ancients_selected')})
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

    this.showDifficultiesBlock()
  }

  selectDifficulty(event) {
    document.querySelectorAll('.difficulties').forEach((item) => {item.classList.remove('difficulties_selected')})
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

    this.showButtonBlock();
  }

  showDifficultiesBlock() {
    this.difficultiesBlock.classList.remove('difficulties-block_disabled')
  }

  showButtonBlock() {
    this.buttonBlock.classList.remove('button-block_disabled')
  }

  showGameBlock() {
    this.gameBlock.classList.remove('game-block_disabled')
  }

  openCloseAncient(event) {
    event.stopPropagation()
    if (event.target.classList.contains('button-ancient_close')) {
      event.target.classList.remove('button-ancient_close')
      document.querySelectorAll('.ancients').forEach((item) => {item.classList.remove('ancients_active')})
    } else {
      event.target.classList.add('button-ancient_close')
      if (event.target.closest('.ancients').classList.contains('ancient-first')) {
        this.ancientFirst.classList.add('ancients_active')
      } else if (event.target.closest('.ancients').classList.contains('ancient-second')) {
        this.ancientSecond.classList.add('ancients_active')
      } else if (event.target.closest('.ancients').classList.contains('ancient-third')) {
        this.ancientThird.classList.add('ancients_active')
      } else if (event.target.closest('.ancients').classList.contains('ancient-fourth')) {
        this.ancientFourth.classList.add('ancients_active')
      }
    }
  }

}