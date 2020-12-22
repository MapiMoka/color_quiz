console.log("hello");
const color_01 = document.getElementById("color-01");
const color_02 = document.getElementById("color-02");
const color_03 = document.getElementById("color-03");
const color_04 = document.getElementById("color-04");
const question_color = document.getElementById("question-color-code");

let color_array = [];

console.log(color_array);

for (i = 0; i < 4; i++) {
  let now_array = "#";
  for (j = 0; j < 6; j++) {
    now_array += getRandom_str();
  }
  color_array.push(now_array);
}
console.log(color_array);

color_01.style.backgroundColor = color_array[0];
color_02.style.backgroundColor = color_array[1];
color_03.style.backgroundColor = color_array[2];
color_04.style.backgroundColor = color_array[3];

let answer_color_code = color_array[Math.floor(Math.random() * 4)];
question_color.innerHTML = answer_color_code;
console.log(answer_color_code);

function getRandom_str() {
  let a = Math.random() * 16; //0以上16未満の実数値
  let b = Math.floor(a);
  let c = b.toString(16);
  let d = c + "";
  return d;
}
