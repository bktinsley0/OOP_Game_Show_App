/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
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
        li.className = "hide space";
      } else {
        li.className = `hide letter ${letter}`;
        li.textContent = letter;
      }
      phraseDiv.appendChild(li);
    });
  }
}

