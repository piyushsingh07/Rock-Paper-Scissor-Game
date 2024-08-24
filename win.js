document.addEventListener('DOMContentLoaded', () => {
    const playerChoice = localStorage.getItem('playerChoice');
    const computerChoice = localStorage.getItem('computerChoice');
    const playerScore = localStorage.getItem('playerScore');
    const computerScore = localStorage.getItem('computerScore');

    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;

    const playerChoiceImg = document.querySelector('#player-choice .choice-circle img');
    const computerChoiceImg = document.querySelector('#computer-choice .choice-circle img');

    playerChoiceImg.src = `Image/${playerChoice}.png`;
    computerChoiceImg.src = `Image/${computerChoice}.png`;

    document.querySelector('#player-choice .choice-circle').classList.add(playerChoice); 
    document.querySelector('#computer-choice .choice-circle').classList.add(computerChoice); 

    document.querySelector('#player-choice .choice-circle').classList.add('win-gradient');


    document.getElementById('play-again-btn').addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        window.location.href = 'hurray-page.html'; 
    });

    const rulesBtn = document.getElementById('rules-btn');
    const closeBtn = document.getElementById('close-rules');
    const rulesPopup = document.getElementById('rules-popup');

    rulesBtn.addEventListener('click', () => {
        rulesPopup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        rulesPopup.style.display = 'none';
    });
});