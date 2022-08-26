import { getRandomArbitrary } from './utility/random'
import ancientsData from '../js/data/ancients.js'
import greenCardsData from '../js/data/mythicCards/green/index.js'
import brownCardsData from '../js/data/mythicCards/brown/index.js'
import blueCardsData from '../js/data/mythicCards/blue/index.js'

export default class Game {

  constructor() {
    this.numBckgr = 0;
  }
  
  init() {
    window.app.view.ancientSelected
    window.app.view.buttonMix.addEventListener('click', () => this.mixCards())
    window.app.view.cardsClosed.addEventListener('click', () => this.setBckgrOpenCard())
  }
  
  mixCards() {
    window.app.view.cardsOpen.style.backgroundImage = 'none'
    this.ancientSelected = window.app.view.ancientSelected
    this.difficultySelected = window.app.view.difficultySelected
    if (this.ancientSelected) {

      this.allCardsArr = []
      
      this.allGreenCardsArr = [...greenCardsData]
      this.allBrownCardsArr = [...brownCardsData]
      this.allBlueCardsArr = [...blueCardsData]

      this.neededAmountGreenCards = ancientsData[this.ancientSelected - 1].firstStage.greenCards + ancientsData[this.ancientSelected - 1].secondStage.greenCards + ancientsData[this.ancientSelected - 1].thirdStage.greenCards
      this.neededAmountBrownCards = ancientsData[this.ancientSelected - 1].firstStage.brownCards + ancientsData[this.ancientSelected - 1].secondStage.brownCards + ancientsData[this.ancientSelected - 1].thirdStage.brownCards
      this.neededAmountBlueCards = ancientsData[this.ancientSelected - 1].firstStage.blueCards + ancientsData[this.ancientSelected - 1].secondStage.blueCards + ancientsData[this.ancientSelected - 1].thirdStage.blueCards

      this.greenCardsNormalArr = greenCardsData.filter((item) => {return item.difficulty === 'normal'});
      this.brownCardsNormalArr = brownCardsData.filter((item) => {return item.difficulty === 'normal'});
      this.blueCardsNormalArr = blueCardsData.filter((item) => {return item.difficulty === 'normal'})

      if (this.difficultySelected === 'super-easy') {
        this.filteredGreenCardsArr = this.allGreenCardsArr.filter((item) => {return item.difficulty === 'easy'})
        if (this.filteredGreenCardsArr.length < this.neededAmountGreenCards) {
          while (this.filteredGreenCardsArr.length !== this.neededAmountGreenCards) {
            const randomNumColorCard = getRandomArbitrary(0, this.greenCardsNormalArr.length)
            this.filteredGreenCardsArr.push(...this.greenCardsNormalArr.splice(randomNumColorCard, 1))
          }
        }
        this.filteredBrownCardsArr = this.allBrownCardsArr.filter((item) => {return item.difficulty === 'easy'})
        if (this.filteredBrownCardsArr.length < this.neededAmountBrownCards) {
          while (this.filteredBrownCardsArr.length !== this.neededAmountBrownCards) {
            const randomNumColorCard = getRandomArbitrary(0, this.brownCardsNormalArr.length)
            this.filteredBrownCardsArr.push(...this.brownCardsNormalArr.splice(randomNumColorCard, 1))
          }
        }
        this.filteredBlueCardsArr = this.allBlueCardsArr.filter((item) => {return item.difficulty === 'easy'})
        if (this.filteredBlueCardsArr.length < this.neededAmountBlueCards) {
          while (this.filteredBlueCardsArr.length !== this.neededAmountBlueCards) {
            const randomNumColorCard = getRandomArbitrary(0, this.brownCardsNormalArr.length)
            this.filteredBlueCardsArr.push(...this.blueCardsNormalArr.splice(randomNumColorCard, 1))
          }
        }
      } else if (this.difficultySelected === 'easy') {
        this.filteredGreenCardsArr = this.allGreenCardsArr.filter((item) => {return item.difficulty !== 'hard'})
        this.filteredBrownCardsArr = this.allBrownCardsArr.filter((item) => {return item.difficulty !== 'hard'})
        this.filteredBlueCardsArr = this.allBlueCardsArr.filter((item) => {return item.difficulty !== 'hard'})
      } else if (this.difficultySelected === 'normal') {
        this.filteredGreenCardsArr = [...this.allGreenCardsArr]
        this.filteredBrownCardsArr = [...this.allBrownCardsArr]
        this.filteredBlueCardsArr = [...this.allBlueCardsArr]
      }  else if (this.difficultySelected === 'hard') {
        this.filteredGreenCardsArr = this.allGreenCardsArr.filter((item) => {return item.difficulty !== 'easy'})
        this.filteredBrownCardsArr = this.allBrownCardsArr.filter((item) => {return item.difficulty !== 'easy'})
        this.filteredBlueCardsArr = this.allBlueCardsArr.filter((item) => {return item.difficulty !== 'easy'})
      } else if (this.difficultySelected === 'super-hard') {
        this.filteredGreenCardsArr = this.allGreenCardsArr.filter((item) => {return item.difficulty === 'hard'})
        if (this.filteredGreenCardsArr.length < this.neededAmountGreenCards) {
          while (this.filteredGreenCardsArr.length !== this.neededAmountGreenCards) {
            const randomNumColorCard = getRandomArbitrary(0, this.greenCardsNormalArr.length)
            this.filteredGreenCardsArr.push(...this.greenCardsNormalArr.splice(randomNumColorCard, 1))
          }
        }
        this.filteredBrownCardsArr = this.allBrownCardsArr.filter((item) => {return item.difficulty === 'hard'})
        if (this.filteredBrownCardsArr.length < this.neededAmountBrownCards) {
          while (this.filteredBrownCardsArr.length !== this.neededAmountBrownCards) {
            const randomNumColorCard = getRandomArbitrary(0, this.brownCardsNormalArr.length)
            this.filteredBrownCardsArr.push(...this.brownCardsNormalArr.splice(randomNumColorCard, 1))
          }
        }
        this.filteredBlueCardsArr = this.allBlueCardsArr.filter((item) => {return item.difficulty === 'hard'})
        if (this.filteredBlueCardsArr.length < this.neededAmountBlueCards) {
          while (this.filteredBlueCardsArr.length !== this.neededAmountBlueCards) {
            const randomNumColorCard = getRandomArbitrary(0, this.brownCardsNormalArr.length)
            this.filteredBlueCardsArr.push(...this.blueCardsNormalArr.splice(randomNumColorCard, 1))
          }
        }
      }

      this.numberStage = 1;
      this.nthStageCardsArr = []
  
      for (let indexStage = 0; indexStage < 3; indexStage++) {
        if (this.numberStage === 1) {
          this.titleStage = 'firstStage';
        } else if (this.numberStage === 2) {
          this.titleStage = 'secondStage';
        } else if (this.numberStage === 3) {
          this.titleStage = 'thirdStage';
        }

        this.colorCardsArr = [];
  
        for (let indexColor = 0; indexColor < 3; indexColor++) {
          // first stage - green cards
          if (indexColor === 0) {
            this.colorCards = 'greenCards'
          } else if (indexColor === 1) {
            this.colorCards = 'brownCards'
          } else if (indexColor === 2) {
            this.colorCards = 'blueCards'
          }
  
          this.amountColorCardsOfNthStage = ancientsData[this.ancientSelected - 1][this.titleStage][this.colorCards];
          
          for (let index = 0; index < this.amountColorCardsOfNthStage; index++) {
            if (indexColor === 0) {
              const randomNumColorCard = getRandomArbitrary(0, this.filteredGreenCardsArr.length)
              this.nthStageCardsArr.push(...this.filteredGreenCardsArr.splice(randomNumColorCard, 1))
            } else if (indexColor === 1) {
              const randomNumColorCard = getRandomArbitrary(0, this.filteredBrownCardsArr.length)
              this.nthStageCardsArr.push(...this.filteredBrownCardsArr.splice(randomNumColorCard, 1))
            } else if (indexColor === 2) {
              const randomNumColorCard = getRandomArbitrary(0, this.filteredBlueCardsArr.length)
              this.nthStageCardsArr.push(...this.filteredBlueCardsArr.splice(randomNumColorCard, 1))
            }
          }
        }
  
        while (this.nthStageCardsArr.length > 0) {
          const randomNumColorCard = getRandomArbitrary(0, this.nthStageCardsArr.length)
          this.allCardsArr.push(...this.nthStageCardsArr.splice(randomNumColorCard, 1))
        }
        
        this.numberStage++
      }
      
      this.numBckgr = 0
    }
    
    this.setAmountCards()
    this.setBckgrClosedCard();
    this.highlightEndedStage();
  }

  setBckgrOpenCard() {
    this.setBckgrClosedCard();
    this.countCards();

    if (this.numBckgr < this.allCardsArr.length) {
      if (this.allCardsArr[this.numBckgr].color === 'green') {
        const found = greenCardsData.find(item => item.id === this.allCardsArr[this.numBckgr].id)
        this.urlBckgr = found.cardFace
      } else if (this.allCardsArr[this.numBckgr].color === 'brown') {
        const found = brownCardsData.find(item => item.id === this.allCardsArr[this.numBckgr].id)
        this.urlBckgr = found.cardFace;
      } else if (this.allCardsArr[this.numBckgr].color === 'blue') {
        const found = blueCardsData.find(item => item.id === this.allCardsArr[this.numBckgr].id)
        this.urlBckgr = found.cardFace
      }
  
      const img = new Image();
      img.src = this.urlBckgr
      img.onload = () => {      
        window.app.view.cardsOpen.style.backgroundImage = `url(${this.urlBckgr})`;
      };
      this.numBckgr++
    } else {
      window.app.view.cardsOpen.style.backgroundImage = 'none'
    }

  }

  setBckgrClosedCard() {
    if (this.numBckgr >= this.allCardsArr.length - 1) {
      window.app.view.cardsClosed.classList.add('cards-closed_unable')
    } else {
      window.app.view.cardsClosed.classList.remove('cards-closed_unable')
    }
  }

  setAmountCards() {
    window.app.view.markBlockGreenFirstSt.textContent = ancientsData[this.ancientSelected - 1].firstStage.greenCards;
    window.app.view.markBlockBrownFirstSt.textContent = ancientsData[this.ancientSelected - 1].firstStage.brownCards;
    window.app.view.markBlockBlueFirstSt.textContent = ancientsData[this.ancientSelected - 1].firstStage.blueCards;
    
    window.app.view.markBlockGreenSecondSt.textContent = ancientsData[this.ancientSelected - 1].secondStage.greenCards;
    window.app.view.markBlockBrownSecondSt.textContent = ancientsData[this.ancientSelected - 1].secondStage.brownCards;
    window.app.view.markBlockBlueSecondSt.textContent = ancientsData[this.ancientSelected - 1].secondStage.blueCards;

    window.app.view.markBlockGreenThirdSt.textContent = ancientsData[this.ancientSelected - 1].thirdStage.greenCards;
    window.app.view.markBlockBrownThirdSt.textContent = ancientsData[this.ancientSelected - 1].thirdStage.brownCards;
    window.app.view.markBlockBlueThirdSt.textContent = ancientsData[this.ancientSelected - 1].thirdStage.blueCards;
  }

  countCards() {
    if (this.allCardsArr[this.numBckgr].color === 'green') {
      if (window.app.view.markBlockGreenFirstSt.textContent > 0) {
        window.app.view.markBlockGreenFirstSt.textContent--;
      } else if (window.app.view.markBlockGreenSecondSt.textContent > 0) {
        window.app.view.markBlockGreenSecondSt.textContent--;
      } else if (window.app.view.markBlockGreenThirdSt.textContent > 0) {
        window.app.view.markBlockGreenThirdSt.textContent--;
      }
    } else if (this.allCardsArr[this.numBckgr].color === 'brown') {
      if (window.app.view.markBlockBrownFirstSt.textContent > 0) {
        window.app.view.markBlockBrownFirstSt.textContent--;
      } else if (window.app.view.markBlockBrownSecondSt.textContent > 0) {
        window.app.view.markBlockBrownSecondSt.textContent--;
      } else if (window.app.view.markBlockBrownThirdSt.textContent > 0) {
        window.app.view.markBlockBrownThirdSt.textContent--;
      }
    } else if (this.allCardsArr[this.numBckgr].color === 'blue') {
      if (window.app.view.markBlockBlueFirstSt.textContent > 0) {
        window.app.view.markBlockBlueFirstSt.textContent--;
      } else if (window.app.view.markBlockBlueSecondSt.textContent > 0) {
        window.app.view.markBlockBlueSecondSt.textContent--;
      } else if (window.app.view.markBlockBlueThirdSt.textContent > 0) {
        window.app.view.markBlockBlueThirdSt.textContent--;
      }
    }

    this.highlightEndedStage()
  }

  highlightEndedStage() {
    // first stage
    if (+window.app.view.markBlockBlueFirstSt.textContent === 0 && +window.app.view.markBlockGreenFirstSt.textContent === 0 && +window.app.view.markBlockBrownFirstSt.textContent === 0) {
      window.app.view.titleFirstStageAmount.classList.add('stage-ended')
    } else if (window.app.view.markBlockBlueFirstSt.textContent > 0 || window.app.view.markBlockGreenFirstSt.textContent > 0 || window.app.view.markBlockBrownFirstSt.textContent > 0) {
      window.app.view.titleFirstStageAmount.classList.remove('stage-ended')
    }
    // second stage
    if (+window.app.view.markBlockBlueSecondSt.textContent === 0 && +window.app.view.markBlockGreenSecondSt.textContent === 0 && +window.app.view.markBlockBrownSecondSt.textContent === 0) {
      window.app.view.titleSecondStageAmount.classList.add('stage-ended')
    } else if (window.app.view.markBlockBlueSecondSt.textContent > 0 || window.app.view.markBlockGreenSecondSt.textContent > 0 || window.app.view.markBlockBrownSecondSt.textContent > 0) {
      window.app.view.titleSecondStageAmount.classList.remove('stage-ended')
    }
    // third stage
    if (+window.app.view.markBlockBlueThirdSt.textContent === 0 && +window.app.view.markBlockGreenThirdSt.textContent === 0 && +window.app.view.markBlockBrownThirdSt.textContent === 0) {
      window.app.view.titleThirdStageAmount.classList.add('stage-ended')
    } else if (window.app.view.markBlockBlueThirdSt.textContent > 0 || window.app.view.markBlockGreenThirdSt.textContent > 0 || window.app.view.markBlockBrownThirdSt.textContent > 0) {
      window.app.view.titleThirdStageAmount.classList.remove('stage-ended')
    }
  }
}