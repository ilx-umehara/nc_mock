window.addEventListener('DOMContentLoaded', function(){
  const ouboDate = this.document.getElementById('oubo_date');

  //日付を取得
  const today = new Date();
  const yyyy = today.getFullYear();
  const MM = today.getMonth() + 1;
  const dd = today.getDate();
  const hh = today.getHours();
  const mm = today.getMinutes();

  const formatToday = yyyy + '年' + MM + '月' + dd + '日' + hh + '時' + mm + '分';
  ouboDate.value = formatToday;
});