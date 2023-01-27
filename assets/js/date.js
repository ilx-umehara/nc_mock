window.addEventListener('DOMContentLoaded', function(){
  const ouboDate_yyyy = this.document.getElementById('oubo_date_y');
  const ouboDate_MM = this.document.getElementById('oubo_date_M');
  const ouboDate_dd = this.document.getElementById('oubo_date_d');
  const ouboDate_hh = this.document.getElementById('oubo_date_h');
  const ouboDate_mm = this.document.getElementById('oubo_date_m');

  const birthdayYYYY = document.getElementById('birthday_y');
  const birthdayMM = document.getElementById('birthday_m');
  const birthdayDD = document.getElementById('birthday_d');

  //今日の日付を取得
  const today = new Date();
  const yyyy = today.getFullYear();
  const MM = today.getMonth() + 1;
  const dd = today.getDate();
  const hh = today.getHours();
  const mm = today.getMinutes();

  ouboDate_yyyy.value = yyyy;
  ouboDate_MM.value = MM;
  ouboDate_dd.value = dd;
  ouboDate_hh.value = hh;
  ouboDate_mm.value = mm;
  const ageCalc = document.getElementsByClassName('ageCalc');
  for(let i = 0; i < ageCalc.length; i++){
    ageCalc[i].addEventListener('change',function(){
      const inputBirthdayYYYY = document.getElementById('birthday_y');
      const inputBirthdayMM = document.getElementById('birthday_m');
      const inputBirthdayDD = document.getElementById('birthday_d');
      const inputOuboDate_yyyy = document.getElementById('oubo_date_y');
      const inputOuboDate_MM = document.getElementById('oubo_date_M');
      const inputOuboDate_dd = document.getElementById('oubo_date_d');
      // console.log(inputOuboDate.value);
      if(inputBirthdayYYYY.value != '' && inputBirthdayMM.value != '' && inputBirthdayDD.value != ''){
  
        //応募日
        const ouboDate = new Date(inputOuboDate_yyyy.value, inputOuboDate_MM.value, inputOuboDate_dd.value);
        //応募時の誕生日を計算
        const ouboYearsBirthday = new Date(inputOuboDate_yyyy.value, birthdayMM.value - 1, birthdayDD.value);

        //年齢
        var age = inputOuboDate_yyyy.value - birthdayYYYY.value;
  
        //応募時点で応募した年の誕生日を迎えていない場合
        console.log('応募日：' + ouboDate);
        console.log('応募年誕生日' + ouboYearsBirthday);
        if(ouboDate < ouboYearsBirthday){
          age--;
        }
        const ouboAge = document.getElementById('oubo_age');
        ouboAge.value = age;
      }
      console.log(`${ageCalc[i].name}がクリックされました！`);
    });
  }
});