let totalQuestions = 10;
let dogruSayisi=0;
let yanlisSayisi=0;

let answer1 = prompt('CSS açılımı nedir? \n a) Computer Style Sheets \n b) Cascading Style Sheets \n c) Creative Style Sheets \n d) Colorful Style Sheets');
if (answer1 == 'b') {
  dogruSayisi++;
  alert("✔");
} else if (answer1 !== 'b') {
  alert("✖");
  yanlisSayisi++;
}

let answer2 = prompt('CSS ile bir öğeye iç boşluk eklemek için hangi kural kullanılır? \n a) margin \n b) padding \n c) border \n  d) spacing');
if (answer2 ==  'b') {
  dogruSayisi++;
  alert("✔");
}else if (answer1 !== 'b') {
  alert("✖");
  yanlisSayisi++;
}

let answer3 = prompt('Hangi CSS seçici tüm <p> etiketlerini seçer? \n a) .p \n b) #p \n c) p \n d) *p ');
if (answer3 == 'c') {
  dogruSayisi++;
  alert("✔");
}else if (answer1 !== 'c') {
  alert("✖");
  yanlisSayisi++;
}