// script.js
const rulesBtn = document.getElementById('rules-btn');
const rulesPopup = document.getElementById('rules-popup');
const closeRulesBtn = document.getElementById('close-rules');

rulesBtn.addEventListener('click', () => {
  rulesPopup.classList.remove('hidden');
});

closeRulesBtn.addEventListener('click', () => {
  rulesPopup.classList.add('hidden');
});