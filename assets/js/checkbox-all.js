//「全て選択」のチェックボックス
let checkAll = document.getElementById("check-all");
//「全て選択」以外のチェックボックス
let el = document.getElementsByClassName("request-checkbox");

//全てにチェックを付ける・外す
const funcCheckAll = (bool) => {
    for (let i = 0; i < el.length; i++) {
        el[i].checked = bool;
    }
};

//「checks」のclassを持つ要素のチェック状態で「全て選択」のチェックをON/OFFする
const funcCheck = () => {
    let count = 0;

    for (let i = 0; i < el.length; i++) {
        if (el[i].checked) {
            count += 1;
        }
    }

    if (el.length === count) {
        checkAll.checked = true;
    } else {
        checkAll.checked = false;
    }
};

//「全て選択」のチェックボックスをクリックした時
checkAll.addEventListener(
    "click",
    () => {
        funcCheckAll(checkAll.checked);
    },
    false
);

//「全て選択」以外のチェックボックスをクリックした時
for (let i = 0; i < el.length; i++) {
    el[i].addEventListener("click", funcCheck, false);
}