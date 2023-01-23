const btnRegistNewContact = document.getElementById('btn_regist-new-contact');
const modalRegistNewContact = document.getElementById('modal_regist-new-contact');
const closeBtnModalRegistNewContact = document.getElementById('close-modal_regist-new-contact');

const btnShowApplHistory = document.getElementById('btn_show-appli-history');
const modalShowApplHistory = document.getElementById('modal_show-appli-history');
const closeBtnModalApplHistory = document.getElementById('close-modal_show-appli-history');

const btnEditEntryInfo = document.getElementById('btn_edit-entry-info');
const modalEditEntryInfo = document.getElementById('modal_edit-entry-info');
const closeBtnModalEditEntryInfo = document.getElementById('close-modal_edit-entry-info');

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
btnEditEntryInfo.addEventListener('click', (e) => {
  e.preventDefault();
  modalEditEntryInfo.classList.add('active');
  overlay.classList.add('active');
  console.log('クリックしました。');
});
closeBtnModalRegistNewContact.addEventListener('click', function(){
  modalRegistNewContact.classList.remove('active');
  modalShowApplHistory.classList.remove('active');
  modalEditEntryInfo.classList.remove('active');
  overlay.classList.remove('active');
  console.log('クリックしました。');
});
closeBtnModalApplHistory.addEventListener('click', function(){
  modalRegistNewContact.classList.remove('active');
  modalShowApplHistory.classList.remove('active');
  modalEditEntryInfo.classList.remove('active');
  overlay.classList.remove('active');
  console.log('クリックしました。');
});
closeBtnModalEditEntryInfo.addEventListener('click', function(){
  modalRegistNewContact.classList.remove('active');
  modalShowApplHistory.classList.remove('active');
  modalEditEntryInfo.classList.remove('active');
  overlay.classList.remove('active');
  console.log('クリックしました。');
});
overlay.addEventListener('click', function() {
  modalRegistNewContact.classList.remove('active');
  modalShowApplHistory.classList.remove('active');
  modalEditEntryInfo.classList.remove('active');
  overlay.classList.remove('active');
});

