const resetButton = document.querySelector('#reset');
const select = document.querySelector('select');

const p1 = {
  score: document.querySelector('#player1-score'),
  button: document.querySelector('#player1-button'),
}

const p2 = {
  score: document.querySelector('#player2-score'),
  button: document.querySelector('#player2-button'),
}

function scorekeeping(player) {
  const totalScore = parseInt(select.value);
  if (parseInt(p1.score.innerText) < totalScore && parseInt(p2.score.innerText) < totalScore) {
    const currentScore = parseInt(player.score.innerText);
    player.score.innerText = currentScore + 1;

    if (currentScore + 1 === totalScore) {
      p1.button.disabled = true;
      p2.button.disabled = true;
      if (player === p1) {
        p1.score.style.color = "#48c774";
        p2.score.style.color = "#f14668";
      }
      else {
        p1.score.style.color = "#f14668";
        p2.score.style.color = "#48c774";
      }
    }
  }
}

function reset() {
  for (let p of [p1, p2]) {
    p.score.innerText = 0;
    p.button.disabled = false;
    p.score.style.color = "rgb(64, 70, 84)";
  }
}

p1.button.addEventListener("click", function () {
  scorekeeping(p1)
});

p2.button.addEventListener("click", function () {
  scorekeeping(p2)
});
resetButton.addEventListener("click", reset);

