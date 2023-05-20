/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      "A Dime a Dozen",
      "A Piece of Cake",
      "Back to Square One",
      "Barking Up The Wrong Tree",
      "Beating Around the Bush",
    ];
    this.activePhrase = null;
  }
  getRandomPhrase() {
    const randomPhrase = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomPhrase];
  }
  /**
* Begins game by selecting a random phrase and displaying it to user
*/
    startGame() {
      const overlay = document.querySelector("#overlay");
      overlay.style.display = "none";
      this.activePhrase = new Phrase(this.getRandomPhrase());
      this.activePhrase.addPhraseToDisplay();
    }
}
