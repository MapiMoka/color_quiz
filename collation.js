let answer_code = document.getElementById("question-color-code");
let select_code = "";

const c_01 = document.getElementById("color-01");
const c_02 = document.getElementById("color-02");
const c_03 = document.getElementById("color-03");
const c_04 = document.getElementById("color-04");
const next_quiz_btn = document.getElementById("footer-container");

function btn_01() {
  let select = document.getElementById("color-01");
  let select_code = document.defaultView.getComputedStyle(select, null)
    .backgroundColor;
  collation(answer_code, select_code, "1");
}
function btn_02() {
  let select = document.getElementById("color-02");
  let select_code = document.defaultView.getComputedStyle(select, null)
    .backgroundColor;
  collation(answer_code, select_code, "2");
}
function btn_03() {
  let select = document.getElementById("color-03");
  let select_code = document.defaultView.getComputedStyle(select, null)
    .backgroundColor;
  collation(answer_code, select_code, "3");
}
function btn_04() {
  let select = document.getElementById("color-04");
  let select_code = document.defaultView.getComputedStyle(select, null)
    .backgroundColor;
  collation(answer_code, select_code, "4");
}

function rbg_hex(rbg) {
  return (
    "#" +
    rbg
      .match(/\d+/g)
      .map(function (a) {
        return ("0" + parseInt(a).toString(16)).slice(-2);
      })
      .join("")
  );
}

function collation(ans, sel, r) {
  if (ans.textContent == rbg_hex(sel)) {
    alert("正解！！");
    result(r);
  } else {
    alert("ちがうよ...。");
  }
}

function result(r) {
  c_01.innerHTML = rbg_hex(
    document.defaultView.getComputedStyle(c_01, null).backgroundColor
  );
  c_02.innerHTML = rbg_hex(
    document.defaultView.getComputedStyle(c_02, null).backgroundColor
  );
  c_03.innerHTML = rbg_hex(
    document.defaultView.getComputedStyle(c_03, null).backgroundColor
  );
  c_04.innerHTML = rbg_hex(
    document.defaultView.getComputedStyle(c_04, null).backgroundColor
  );
  console.log(r);
  if (r == 1) {
    console.log(r);
    c_01.style.border = "10px solid #000";
  } else if (r == 2) {
    console.log(r);
    c_02.style.border = "10px solid #000";
  } else if (r == 3) {
    console.log(r);
    c_03.style.border = "10px solid #000";
  } else if (r == 4) {
    c_04.style.border = "10px solid #000";
  } else {
    alert("予期せぬ自体が発生！！");
  }
  next_quiz_btn.innerHTML =
    '<p class="footer-container-p" onclick="next_quiz()">次のクイズへ</p>';
}
function next_quiz() {
  location.href = "file:///D:/Qin_Contents/color_quiz.html";
}
