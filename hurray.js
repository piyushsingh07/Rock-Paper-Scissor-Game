document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('play-again-btn').addEventListener('click', () => {
        window.location.href = 'index.html';
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