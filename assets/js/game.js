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

// countdown();

/**
 * Notes from TFaulk:
 * This is the bones of the game logic
 * Once I have the final background image,
 * I will be able to properly wire it up
 * Apologies that it is messy atm, but I will tidy this up
 * Thanks
 */

let randomCharacter = [1, 2, 3, 4, 5];
let num1 = 5; // Update the name of this var

function gamePlay() {

  console.log("Start Game Play");

  background.removeEventListener('click', gamePlay); // Make sure you remove the even listeners 

  let counter = document.getElementById("timer").innerHTML;
  console.log(counter);

  console.log("randomCharacter.length:", randomCharacter.length);
  
  if (randomCharacter.length !== 0) {
    if (counter !== "0:00") {
      
      console.log("Start if loop");

      let num = Math.floor(Math.random() * num1);
      console.log("num", num);

      let chosenCharacter = randomCharacter[num];
      console.log("chosenCharacter", chosenCharacter);

      const background = document.getElementById("background");

      switch (chosenCharacter) {
          case 1:
              console.log("CASE 1");
              randomCharacter.splice(num, 1);
              num1--;
              console.log(randomCharacter);
              background.addEventListener('click', gamePlay);
              break;
          case 2:
              console.log("CASE 2");
              randomCharacter.splice(num, 1);
              num1--;
              console.log(randomCharacter);
              background.addEventListener('click', gamePlay);
              break;
          case 3:
              console.log("CASE 3");
              randomCharacter.splice(num, 1);
              num1--;
              console.log(randomCharacter);
              background.addEventListener('click', gamePlay);
              break;
          case 4:
              console.log("CASE 4");
              randomCharacter.splice(num, 1);
              num1--;
              console.log(randomCharacter);
              background.addEventListener('click', gamePlay);
              break;
          case 5:
              console.log("CASE 5");
              randomCharacter.splice(num, 1);
              num1--;
              console.log(randomCharacter);
              background.addEventListener('click', gamePlay);
              break;
      }
    } else {
      console.log("Game Won");
    }
  } else {
    console.log("Game Won");
  }
}

// gamePlay();
