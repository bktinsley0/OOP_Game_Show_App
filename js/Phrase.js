/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    console.log(phrase);
  }
  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const phraseDiv = document.querySelector("#phrase ul");
    const phraseArray = this.phrase.split("");
    phraseArray.forEach((letter) => {
      const li = document.createElement("li");
      if (letter === " ") {
        li.className = "space";
      } else {
        li.className = `hide letter ${letter}`;
        li.textContent = letter;
      }
      phraseDiv.appendChild(li);
    });
  }
  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }
  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    const letters = document.querySelectorAll("#phrase li");
    letters.forEach((li) => {
      if (li.textContent === letter) {
        li.classList.remove("hide");
        li.classList.add("show");
      }
    });
  }
}
