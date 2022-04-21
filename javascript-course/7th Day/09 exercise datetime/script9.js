//şimdiki tarihin gün,ay ve yıl bilgisi
let d = new Date();
console.log(d);

//Tarih ve saat bilgisini içeren bir date objesi
var dta = new Date("8/24/2020 14:30:30");
var dtb = new Date(2021,7,24,14,30,39);

console.log(dta);
console.log(dtb);

//1/1/1990 tarihinden bir gün öncesi
var dtc = new Date("1/1/1990");
var dayOfMonth = dtc.getDate();
dtc.setDate(dayOfMonth-1);

console.log(dtc);

//iki tarih arasında geçen zaman
var start = new Date(2020,5,10);
var finish = new Date(2022,4,10)

var milisecond = finish-start;
var saniye = milisecond/1000;
var dakika = saniye/60;
var saat = dakika/60;
var gün = saat/24;

console.log("milisecond"+ milisecond);
console.log("saniye"+ saniye);
console.log("dakika"+ dakika);
console.log("saat"+saat);
console.log("gün"+gün);

//yaş hesaplama

var birthday= new Date(1985,1,8);
var ageDifferent = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifferent);

console.log(ageDate.getFullYear()-1970);

//her yıl mayısın ikinci haftası pazar günü 2019'da hangi gün

var date1 = new Date();
date1.setHours(0,0,0,0);
date1.setFullYear(2019);
date1.setDate(1);
date1.setMonth(4);

while(date1.getDay() !=0){
    date1.setDate(date1.getDate()+1)
}
date1.setDate(date1.getDate());
console.log(date1);
