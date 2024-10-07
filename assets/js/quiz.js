let totalQuestions = 10;
let dogruSayisi=0;
let yanlisSayisi=0;

let answer1 = prompt('CSS açılımı nedir? \n a) Computer Style Sheets \n b) Cascading Style Sheets \n c) Creative Style Sheets d) Colorful Style Sheets');
if (answer1 == 'b') {
  dogruSayisi++;
  alert("✔");
} else if (answer1 !== 'b') {
  alert("✖");
  yanlisSayisi++;
}