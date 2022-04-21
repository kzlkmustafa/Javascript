//lesson 7  exercise operators 

let indexCan;
let indexAda;

let kgCan = 60;
let kgAda = 40;

let heightCan = 1.70;
let heightAda = 1.50;

indexAda = (kgAda) / (heightAda*heightAda);
indexCan = (kgCan) / (heightCan*heightCan);


console.log(indexAda.toFixed(2),indexCan.toFixed(2));

let adaHigherIndex = indexAda>indexCan;
let canHigherIndex = indexCan>indexAda;

console.log("Ada'nın kilo indeksi can'ın kilo indeksinden daha büyük: "+adaHigherIndex);

console.log("Can'ın kilo indeksi ada'nın kilo indeksinden daha büyük : "+canHigherIndex);

let AdaZayif = (indexAda>=0) && (indexAda<=18.4);
let AdaNormal = (indexAda>=18.5) && (indexAda<=24.9);
let AdaKilolu = (indexAda>=25) && (indexAda<=29.9);
let adaSisman = (indexAda>=30) && (indexAda<=34.5);

console.log("Ada zayif : " +AdaZayif);
console.log("Ada'nın Kilosu normal : " +AdaNormal);
console.log("Ada kilolu : "+ AdaKilolu);
console.log("ada şişman : "+ adaSisman);

