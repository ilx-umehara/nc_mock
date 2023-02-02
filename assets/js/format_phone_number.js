window.addEventListener("load",function(){
  const inputTel1 = document.getElementById('tel-1');//＝電話番号の入力欄
  if (!inputTel1){ return false;}
  //電話番号の入力欄から離れたら発動
  inputTel1.addEventListener('blur', () => {
    // バリデーション関数
    let validateTelNeo = function (value) {
      return /^[0０]/.test(value) && libphonenumber.isValidNumber(value, 'JP');
    }
 
    // 整形関数
    let formatTel = function (value) {
      return new libphonenumber.AsYouType('JP').input(value);
    }
 
    const postdata = inputTel1.value;//入力した電話番号を取得
    //入力した内容がバリデーションに引っかかったときはエラー
    if (!validateTelNeo(postdata)) {
      console.log('ERROR')
      return
    }
    let formattedTel = formatTel(postdata);//入力した電話番号を整形
    console.log(formattedTel);
    inputTel1.value = formattedTel;//整形した電話番号を入力欄に返す
  });

  const inputTel2 = document.getElementById('tel-2');//＝電話番号の入力欄
  if (!inputTel2){ return false;}
  //電話番号の入力欄から離れたら発動
  inputTel2.addEventListener('blur', () => {
    // バリデーション関数
    let validateTelNeo = function (value) {
      return /^[0０]/.test(value) && libphonenumber.isValidNumber(value, 'JP');
    }
 
    // 整形関数
    let formatTel = function (value) {
      return new libphonenumber.AsYouType('JP').input(value);
    }
 
    const postdata = inputTel2.value;//入力した電話番号を取得
    //入力した内容がバリデーションに引っかかったときはエラー
    if (!validateTelNeo(postdata)) {
      console.log('ERROR')
      return
    }
    let formattedTel = formatTel(postdata);//入力した電話番号を整形
    console.log(formattedTel);
    inputTel2.value = formattedTel;//整形した電話番号を入力欄に返す
  });
});