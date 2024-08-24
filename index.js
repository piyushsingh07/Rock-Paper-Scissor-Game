document.addEventListener('DOMContentLoaded', () => {
  const choices = ['rock', 'paper', 'scissors'];
  const choiceButtons = document.querySelectorAll('.choice-btn');
  const playerScoreSpan = document.getElementById('player-score');
  const computerScoreSpan = document.getElementById('computer-score');
  const rulesBtn = document.getElementById('rules-btn');
  const closeBtn = document.getElementById('close-rules');
  const rulesPopup = document.getElementById('rules-popup');
  const resetBtn = document.getElementById('reset-btn');

 let playerScore = localStorage.getItem('playerScore') ? parseInt(localStorage.getItem('playerScore')) : 0;
 let computerScore = localStorage.getItem('computerScore') ? parseInt(localStorage.getItem('computerScore')) : 0;

  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;

  choiceButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          const playerChoice = choices[index];
          const computerChoice = choices[Math.floor(Math.random() * choices.length)];
          const winner = getWinner(playerChoice, computerChoice);

          if (winner === 'player') {
              playerScore++;
              localStorage.setItem('playerScore', playerScore);
              playerScoreSpan.textContent = playerScore;
              redirectToResultPage(playerChoice, computerChoice, 'win');
          } else if (winner === 'computer') {
              computerScore++;
              localStorage.setItem('computerScore', computerScore);
              computerScoreSpan.textContent = computerScore;
              redirectToResultPage(playerChoice, computerChoice, 'lose');
          } else {
              redirectToResultPage(playerChoice, computerChoice, 'tie');
          }
      });
  });

  rulesBtn.addEventListener('click', () => {
      rulesPopup.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
      rulesPopup.style.display = 'none';
  });

  resetBtn.addEventListener('click', () => {
    localStorage.removeItem('playerScore');
    localStorage.removeItem('computerScore');
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
});

  function getWinner(playerChoice, computerChoice) {
      if (playerChoice === computerChoice) {
          return 'draw';
      } else if (
          (playerChoice === 'rock' && computerChoice === 'scissors') ||
          (playerChoice === 'paper' && computerChoice === 'rock') ||
          (playerChoice === 'scissors' && computerChoice === 'paper')
      ) {
          return 'player';
      } else {
          return 'computer';
      }
  }

  function redirectToResultPage(playerChoice, computerChoice, result) {
      localStorage.setItem('playerChoice', playerChoice);
        localStorage.setItem('computerChoice', computerChoice);
        localStorage.setItem('playerScore', playerScore);
        localStorage.setItem('computerScore', computerScore);
        localStorage.setItem('result', result);

      // Redirect to the appropriate result page
      if (result === 'win') {
          window.location.href = 'win-page.html';
      } else if (result === 'lose') {
          window.location.href = 'lose-page.html';
      } else {
          window.location.href = 'tie-page.html';
      }
  }
});