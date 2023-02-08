const btnEditName = document.getElementById('base_info_name');
const modalEditName = document.getElementById('modal_edit_name');
const closeBtnModalEditName = document.getElementById('close-modal_edit_name');

const btnShowApplHistory = document.getElementById('btn_show-appli-history');
const modalShowApplHistory = document.getElementById('modal_show-appli-history');
// const closeBtnModalApplHistory = document.getElementById('close-modal_show-appli-history');

const btnEditEntryInfo = document.getElementById('btn_edit-entry-info');
const modalEditEntryInfo = document.getElementById('modal_edit-entry-info');
const closeBtnModalEditEntryInfo = document.getElementById('close-modal_edit-entry-info');

const btnSendCorrectionRequest = document.getElementById('btn_send-correction-request');
const modalSendCorrectionRequest = document.getElementById('modal_send-correction-request');
const closeBtnModalSendCorrectionRequest = document.getElementById('close-modal_send-correction-request');

const btnRegistNewContact = document.getElementById('btn_regist-new-contact');
const modalRegistNewContact = document.getElementById('modal_regist-new-contact');
const closeBtnModalRegistNewContact = document.getElementById('close-modal_regist-new-contact');

// const closeBtn = document.querySelector('.close');
const close1 = document.getElementById('close_1');
const close2 = document.getElementById('close_2');
const close3 = document.getElementById('close_3');
const close4 = document.getElementById('close_4');
const close5 = document.getElementById('close_5');

const overlay = document.querySelector('.overlay');


btnEditName.addEventListener('click', (e) => {
  e.preventDefault();
  modalEditName.classList.add('active');
  overlay.classList.add('active');
  console.log('クリックしました。');
});
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
btnSendCorrectionRequest.addEventListener('click', (e) => {
  e.preventDefault();
  modalSendCorrectionRequest.classList.add('active');
  overlay.classList.add('active');
});

close1.addEventListener('click', (e) => {
  e.preventDefault();
  modalEditName.classList.remove('active');
  overlay.classList.remove('active');
});
close2.addEventListener('click', (e) => {
  e.preventDefault();
  modalShowApplHistory.classList.remove('active');
  overlay.classList.remove('active');
});
close3.addEventListener('click', (e) => {
  e.preventDefault();
  modalEditEntryInfo.classList.remove('active');
  overlay.classList.remove('active');
});
close4.addEventListener('click', (e) => {
  e.preventDefault();
  modalSendCorrectionRequest.classList.remove('active');
  overlay.classList.remove('active');
});
close5.addEventListener('click', (e) => {
  e.preventDefault();
  modalRegistNewContact.classList.remove('active');
  overlay.classList.remove('active');
});

closeBtnModalEditName.addEventListener('click', function(){
  modalEditName.classList.remove('active');
  modalRegistNewContact.classList.remove('active');
  modalShowApplHistory.classList.remove('active');
  modalEditEntryInfo.classList.remove('active');
  modalSendCorrectionRequest.classList.remove('active');
  overlay.classList.remove('active');
  console.log('closeBtnModalEditNameクリックしました。');
});
closeBtnModalRegistNewContact.addEventListener('click', function(){
  modalEditName.classList.remove('active');
  modalRegistNewContact.classList.remove('active');
  modalShowApplHistory.classList.remove('active');
  modalEditEntryInfo.classList.remove('active');
  modalSendCorrectionRequest.classList.remove('active');
  overlay.classList.remove('active');
  console.log('closeBtnModalRegistNewContactクリックしました。');
});

closeBtnModalEditEntryInfo.addEventListener('click', function(){
  modalEditName.classList.remove('active');
  modalRegistNewContact.classList.remove('active');
  modalShowApplHistory.classList.remove('active');
  modalEditEntryInfo.classList.remove('active');
  modalSendCorrectionRequest.classList.remove('active');
  overlay.classList.remove('active');
  console.log('closeBtnModalEditEntryInfoクリックしました。');
});
closeBtnModalSendCorrectionRequest.addEventListener('click', function(){
  modalEditName.classList.remove('active');
  modalRegistNewContact.classList.remove('active');
  modalShowApplHistory.classList.remove('active');
  modalEditEntryInfo.classList.remove('active');
  modalSendCorrectionRequest.classList.remove('active');
  overlay.classList.remove('active');
  console.log('closeBtnModalSendCorrectionRequestクリックしました。');
});
overlay.addEventListener('click', function() {
  modalEditName.classList.remove('active');
  modalRegistNewContact.classList.remove('active');
  modalShowApplHistory.classList.remove('active');
  modalEditEntryInfo.classList.remove('active');
  modalSendCorrectionRequest.classList.remove('active');
  overlay.classList.remove('active');
  console.log('オーバーレイをクリックしました。');
});
closeBtn.addEventListener('click', function() {
  modalEditName.classList.remove('active');
  modalRegistNewContact.classList.remove('active');
  modalShowApplHistory.classList.remove('active');
  modalEditEntryInfo.classList.remove('active');
  modalSendCorrectionRequest.classList.remove('active');
  overlay.classList.remove('active');
  console.log('closeBtnをクリックしました。');
});

