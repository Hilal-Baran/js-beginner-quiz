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
}else if (answer2 !== 'b') {
  alert("✖");
  yanlisSayisi++;
}

let answer3 = prompt('Hangi CSS seçici tüm <p> etiketlerini seçer? \n a) .p \n b) #p \n c) p \n d) *p ');
if (answer3 == 'c') {
  dogruSayisi++;
  alert("✔");
}else if (answer3 !== 'c') {
  alert("✖");
  yanlisSayisi++;
}

let answer4 = prompt("CSS'de, bir öğenin görünürlüğünü gizlemek için hangi özellik kullanılır? \n a) display: none; \n b) visibility: hidden; \n c) both a and b \n d) hide: true;");
if (answer4 == 'c') {
  dogruSayisi++;
  alert("✔");
}else if (answer4 !== 'c') {
  alert("✖");
  yanlisSayisi++;
}

let answer5 = prompt("Flexbox içinde bir öğenin ana eksende nasıl yerleştirileceğini belirlemek için hangi özellik kullanılır? \n a) justify-content \n b) align-items  \n c) flex-direction \n d) flex-wrap");
if (answer5 == 'a') {
  dogruSayisi++;
  alert("✔");
}else if (answer5 !== 'a') {
  alert("✖");
  yanlisSayisi++;
}

let answer6 = prompt("Flexbox'da bir öğenin dikey olarak ortalanması için hangi özellik kullanılır? \n a) justify-content \n b) align-items  \n c) flex-direction \n d) flex-wrap");
if (answer6 = "b") {
  dogruSayisi++;
  alert("✔");
}else if (answer6 !== 'b') {
  alert("✖");
  yanlisSayisi++;
}