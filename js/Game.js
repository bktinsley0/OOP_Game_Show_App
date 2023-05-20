/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrase = [
      new Phrase("A Dime a Dozen"),
      new Phrase("A Piece of Cake"),
      new Phrase("Back to Square One"),
      new Phrase("Barking Up The Wrong Tree"),
      new Phrase("Beating Around the Bush"),
    ];
    this.activePhrase = null;
  }
  getRandomPhrase() {
    const randomPhrase = Math.floor(Math.random() * this.phrase.length);
    return this.phrase[randomPhrase];
  }
  
  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    const overlay = document.querySelector("#overlay");
    overlay.style.display = "none";
    this.activePhrase = (this.getRandomPhrase());
    this.activePhrase.addPhraseToDisplay();
  }
  /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
  checkForWin() {
    const hiddenLetters = document.querySelectorAll(".hide");
    if (hiddenLetters.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    const lives = document.querySelectorAll(".tries img");
    lives[this.missed].src = "images/lostHeart.png";
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }
  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const overlay = document.querySelector("#overlay");
    const gameOverMessage = document.querySelector("#game-over-message");
    overlay.style.display = "block";
    if (gameWon) {
      gameOverMessage.textContent = "Great job! You won!";
      overlay.className = "win";
    } else {
      gameOverMessage.textContent = "Sorry, better luck next time!";
      overlay.className = "lose";
    }
    this.resetGame();
  }
  /**
   * Resets the game board between games
   **/
  resetGame() {
    const phraseDiv = document.querySelector("#phrase ul");
    const keys = document.querySelectorAll(".key");
    const lives = document.querySelectorAll(".tries img");
    phraseDiv.innerHTML = "";
    keys.forEach((key) => {
      key.className = "key";
      key.disabled = false;
    });
  }

  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    button.disabled = true;
    if (this.activePhrase.checkLetter(button.textContent)) {
      button.classList.add("chosen");
      this.activePhrase.showMatchedLetter(button.textContent);
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    } else {
      button.classList.add("wrong");
      this.removeLife();
    }
  }
}
