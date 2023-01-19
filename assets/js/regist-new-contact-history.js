const btnRegistNewContact = document.getElementById('btn_regist-new-contact');
const modalRegistNewContact = document.getElementById('modal_regist-new-contact');
const closeBtnModalRegistNewContact = document.getElementById('close-modal_regist-new-contact');

const btnShowApplHistory = document.getElementById('btn_show-appli-history');
const modalShowApplHistory = document.getElementById('modal_show-appli-history');
const closeBtnModalApplHistory = document.getElementById('close-modal_show-appli-history');

const closeBtn = document.querySelector('.close');
const overlay = document.querySelector('.overlay');

btnRegistNewContact.addEventListener('click', (e) => {
  e.preventDefault();
  modalRegistNewContact.classList.add('active');
  overlay.classList.add('active');
  console.log('クリックしました。');
});
btnShowApplHistory.addEventListener('click', (e) => {
  e.preventDefault();
  modalShowApplHistory.classList.add('active');
  overlay.classList.add('active');
  console.log('クリックしました。');
});
closeBtnModalRegistNewContact.addEventListener('click', function(){
  modalRegistNewContact.classList.remove('active');
  modalShowApplHistory.classList.remove('active');
  overlay.classList.remove('active');
});
closeBtnModalApplHistory.addEventListener('click', function(){
  modalRegistNewContact.classList.remove('active');
  modalShowApplHistory.classList.remove('active');
  overlay.classList.remove('active');
});
overlay.addEventListener('click', function() {
  modalRegistNewContact.classList.remove('active');
  modalShowApplHistory.classList.remove('active');
  overlay.classList.remove('active');
});

