// function play(){
// // step - 1: hide the home screen.
// const homeScreen = document.getElementById('home-screen');
// homeScreen.classList.add('hidden');
// // console.log(homeScreen)


// // step -2: show the play ground
// const playGroundSection = document.getElementById('play-ground')
// playGroundSection.classList.remove('hidden');
// }
// capture keyboard key
function handleKeyboardKeyUpEvent(event) {
 const playerPressed = event.key;
 console.log('player pressed', playerPressed);

 //stop the game if pressed 'Esc'
 if (playerPressed === 'Escape') {
  gameOver();
 }

 // get the expected to press
 const currentAlphabetElement = document.getElementById('current-alphabet');
 const currentAlphabet = currentAlphabetElement.innerText;
 const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
 console.log(playerPressed, expectedAlphabet)

 // check matched or not
 if (playerPressed === expectedAlphabet) {
  console.log('you get a point');
  // function die dekbo
  const currentScore = getTextElementValueById('current-score');
  const updatedScore = currentScore + 1;
  setTextElementValueById('current-score', updatedScore);







  // -------------------------
  // update score:
  // 1.get the current score
  // const currentScoreElement = document.getElementById('current-score');
  // const currentScoreText = currentScoreElement.innerText;
  // const currentScore = parseInt(currentScoreText);
  // console.log(currentScore);

  // // increase the score by 1
  // const newScore = currentScore + 1;

  // // show the updated score
  // currentScoreElement.innerText = newScore;

  // start a new round
  removeBackgroundColorById(expectedAlphabet);
  continueGame();
 }
 else {
  console.log('you missed . you lost a life');

  // function die dekbo
  const currentLife = getTextElementValueById('current-life');
  const updatedLife = currentLife - 1;
  setTextElementValueById('current-life', updatedLife);

  // game over
  if (updatedLife === 0) {
   gameOver();
  }

  // -------------------------------
  // step-1: get the current Life number
  // const currentLifeElement = document.getElementById('current-life');
  // const currentLifeText = currentLifeElement.innerText;
  // const currentLife = parseInt(currentLifeText);

  // // step-2: reduce the life count
  // const newLife = currentLife - 1;
  // // step-3: display the updated life count
  // currentLifeElement.innerText = newLife;
 }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame() {
 // step-1: generate a randoom alphabet
 const alphabet = getARandomAlphabet();
 console.log('your random alphabet', alphabet)

 // set randomly generated alphabe to the screen(show it)
 const currentAlphabetElement = document.getElementById('current-alphabet');
 currentAlphabetElement.innerText = alphabet;

 // set background color
 setBackgroundColorById(alphabet)
}

function play() {
 hideElementById('home-screen');
 // when game over
 hideElementById('final-score')
 // reset play ground
 setTextElementValueById('current-life', 5)
 setTextElementValueById('current-score', 0)
 // ------------
 showelementById('play-ground');
 continueGame()
}
// game over function
function gameOver() {
 hideElementById('play-ground');
 showelementById('final-score')
 // update final score
 const lastScore = getTextElementValueById('current-score');
 setTextElementValueById('last-score', lastScore);
 // clear the last selected alphabet hightlight
 const currentAlphabet = getElementTextById('current-alphabet');
 // console.log()
 removeBackgroundColorById(currentAlphabet);
}
