/**
 * @param {number} [player] - player's score.
 * @param {number} [dealer] - dealer's score.
 * @param {number} [randomnumber] - giving random number.
 */

var player = 0;
var dealer = 0;
var randomNumber = 0;

/**
 * @description Return a number between 1-11.
 * @param {object} [function] - getRandomNumber(); - generate random number. 
 */

function getRandomNumber(){
  randomNumber = Math.floor(Math.random() * 11) +1;
  return randomNumber;
}

/**
 * @description Logged player's and dealer's score and add the score's when you draw cards.  
 * @param {object} [function] - playerHit(); - player's total score.
 * @param {object} [function] - dealerHit(); - dealer's total score. 
 */

function playerHit() {
  player += getRandomNumber();
  console.log("Player drew: " + randomNumber + "\nPlayer score = " + player);
}

function dealerHit() {
  dealer += getRandomNumber();
  console.log("Computer drew: " + randomNumber + "\nComputer score = " + dealer);
}

/**
 * @description Check diffrent winning solution  
 * If dealer/player number bigger than 21 and dealer/player lower than 21.
 * Dealer's/player's hand 21. 
 * @param {object} {function} - blackJack(); 
 * @param {boolean} {Conditions} - true or false.
 */

function blackJack() {

  if(dealer > 21 && player <= 21) {
      alert("Player wins!\n" + "Computer score: "  + dealer + "\nPlayer scoree: " + player);
  } 
  else if 
    (player > 21 && dealer <= 21) {
      alert("Computer wins!\n" + "Computer score: " + dealer + "\nPlayer score: " + player);
  } 
  else if 
    (dealer === 21) {
      alert("Computer wins!\n" + "Computer score: " + dealer + "\nPlayer score: " + player);
  } 
  else if
    (player === 21) {
      alert("Player wins!\n" + "Computer score: " + dealer + "\nPlayer score: "   + player); 
  }
}

/**
 * @description Player get 1 card and Dealer get's 2. 
 * Player try to draw card cloes to 21 . If Dealer get more scores than player and <=21. Dealer wins. 
 * Player and Dealer Scores 17 => Draw <=21.
 * If Dealer under < 17. Need to draw one more card.
 * @param {object} [function] - blackJack(); - Loops
 */

window.addEventListener("keydown", function(event){
  // Press D to draw a card
  if (event.code === 'KeyD') {
      playerHit();

  if (dealer === 0) { 
      dealerHit();
      dealerHit();
    }
  } 
  else if (event.code === 'KeyS') {
  // Press S to stop.
  console.log("Player stop: " + player);
  if (dealer < 17 ) {
      dealerHit();   
  } 
  else if 
    (player < dealer) {
      alert("Computer wins!\n" + "Computer score: " + dealer + "\nPlayer score: "   + player);
  } 
  else if 
    (player > dealer) {
      alert("Player wins!\n" + "Computer score: " + dealer + "\nPlayer sccore: " + player);
  }
  if (player === dealer) {
      alert("It is a Draw!\n" + "Computer score: " + dealer + "\nPlayer score: "  + player); 
    }
  }
    blackJack();
});