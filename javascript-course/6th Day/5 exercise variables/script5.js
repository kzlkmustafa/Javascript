//lesson 5 exercise variables

var customerName ="Mustafa";
var customerSurname ="Kızılkaya";
var custumerId ="12345678912";
var customerGender =true; //true erkek, false kadın
var customerAddress =({
    city: "Ankara",
    country: "Türkiye",
    body: "çankaya mah. No:1"
})
var customerHobbies =(["Book","Cinema","Sport"]);


var order1 = Number("100"); //sipariş 1
var order2 = Number("150"); //sipariş 2

var total1 = (order1+order2); //sipariş toplamı
console.log(total1);

var order3 =Number("100.2");
var order4 =Number("150.5");

var total2 = order3+order4;
console.log(total2);

var order5= parseInt("100.2"); //tam sayıya yuvarla
var order6= parseInt("150.5"); //tam sayıya yuvarla

var total3 = order5+order6;
console.log(total3);

const yearOfBirth = 1986;

var yas1 = new Date().getFullYear() - yearOfBirth //yıla göre yaş hesabı

console.log(yas1);

var course = "Modern Javascript Kursu";

console.log(course.length); //karakter sayısını gösterir
