function countdown() {
    var seconds = 60;
    function tick() {
      var counter = document.getElementById("timer");
      seconds--;
      counter.innerHTML =
        "0:" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) {
        setTimeout(tick, 1000);
      }
    }
    tick();
  }

countdown();

/**
 * Main Game Play Function
 * A random number is selected. 
 * This corresponds to an instrument in the switch.
 * This number is then removed from the randomCharacter array (so it can not be reselected)
 * The gamePlay function is re-run for another character to be guessed.
 */

// Global Variables (To be moved to the top of the page)
let randomCharacter = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numOfCharacters = 9;
const bongo = document.getElementById("bongo");
const cello = document.getElementById("cello");
const childSing = document.getElementById("child-sing");
const drum = document.getElementById("drum");
const flute = document.getElementById("flute");
const guitar = document.getElementById("guitar");
const piano = document.getElementById("piano");
const trombone = document.getElementById("trombone");
const violin = document.getElementById("violin");

function gamePlay() {

  // Removes all of the event listeners from the previous selection
  bongo.removeEventListener('click', gamePlay);
  cello.removeEventListener('click', gamePlay);
  childSing.removeEventListener('click', gamePlay);
  drum.removeEventListener('click', gamePlay);
  flute.removeEventListener('click', gamePlay);
  guitar.removeEventListener('click', gamePlay);
  piano.removeEventListener('click', gamePlay);
  trombone.removeEventListener('click', gamePlay);
  violin.removeEventListener('click', gamePlay);

  let counter = document.getElementById("timer").innerHTML;
  
  if (randomCharacter.length !== 0) {
    if (counter !== "0:00") {

      let randomNum = Math.floor(Math.random() * numOfCharacters);
      let chosenCharacter = randomCharacter[randomNum];

      switch (chosenCharacter) {
          case 1:
              console.log("CASE 1: Bongo");
              randomCharacter.splice(randomNum, 1);
              numOfCharacters--;
              bongo.addEventListener('click', gamePlay);
              break;
          case 2:
              console.log("CASE 2: Cello");
              randomCharacter.splice(randomNum, 1);
              numOfCharacters--;
              cello.addEventListener('click', gamePlay);
              break;
          case 3:
              console.log("CASE 3: Sing");
              randomCharacter.splice(randomNum, 1);
              numOfCharacters--;
              childSing.addEventListener('click', gamePlay);
              break;
          case 4:
              console.log("CASE 4: Drum");
              randomCharacter.splice(randomNum, 1);
              numOfCharacters--;
              drum.addEventListener('click', gamePlay);
              break;
          case 5:
              console.log("CASE 5: Flute");
              randomCharacter.splice(randomNum, 1);
              numOfCharacters--;
              flute.addEventListener('click', gamePlay);
              break;
          case 6:
              console.log("CASE 6: Guitar");
              randomCharacter.splice(randomNum, 1);
              numOfCharacters--;
              guitar.addEventListener('click', gamePlay);
              break;
          case 7:
              console.log("CASE 7: Piano");
              randomCharacter.splice(randomNum, 1);
              numOfCharacters--;
              piano.addEventListener('click', gamePlay);
              break;
          case 8:
              console.log("CASE 8: Trombone");
              randomCharacter.splice(randomNum, 1);
              numOfCharacters--;
              trombone.addEventListener('click', gamePlay);
              break;
          case 9:
              console.log("CASE 9: Violin");
              randomCharacter.splice(randomNum, 1);
              numOfCharacters--;
              violin.addEventListener('click', gamePlay);
              break;
      }
    } else {
      console.log("Game Won");
    }
  } else {
    console.log("Game End");
  }
}

gamePlay();
