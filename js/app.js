/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
let startBtn = document.querySelector("#btn__reset");
startBtn.addEventListener("click", () => {
  game = new Game();
  game.startGame();
});

let keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    game.handleInteraction(e.target);
  });
});
