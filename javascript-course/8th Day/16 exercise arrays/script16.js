//exercise: Arrays

//"bmw,mercedes,opel,mazda" elemanlı bir dizi

let oto = ["BMW","Mercedes","Opel","Mazda"];

//dizi kaç elemanlı

console.log(oto.length);

// dizinin ilk ve son elemanı nedir

console.log(oto[0]);
console.log(oto[oto.length-1]);

//"renault" değerini dizinin sonuna ekle

//oto[4] = "Renault";  //1.yol
//oto[oto.length] = "Renault";  //2.yol
oto.push("Renault");    //3.yol

//"toyota" değerini dizinin başına ekle

oto.unshift("Toyota");

//"renault" değerini siliniz (sondaki elemanı)
oto.pop();

//"toyota" değerini siliniz (baştaki elemanı)
oto.shift();

//dizi elemanlarını ters çeviriniz
oto.reverse();

// dizi elemanlarını alfabetik olarak sıralayınız.
oto.sort();

// [1,2,5,80] dizisini sıralayın
var numbers =[1,2,5,80,15];

function compare(a,b) {
    if(a>b) return 1;
    if(a==b) return 0;
    if (a<b) return -1;
  }

console.log(numbers.sort(compare)); //sayısal olarak sıralamak için

//opel değeri dizinin bir elemanı mıdır
console.log(oto.indexOf("Opel"));
//console.log(oto.includes("Opel")); //2.yol

//var str = "Cherole,Dacia"; ifadesini diziye çevir.
var str = "Cherolet,Dacia";
var oto2 = str.split(",");
console.log(oto2);

//oluşturulan iki dizinin elemanlarını birleştirin

var oto3 = oto.concat(oto2);
console.log(oto3);

//oluşturulan yeni dizinin son 2 elemanını siliniz
//console.log(oto3.pop()); // 1.yol
//console.log(oto3.splice(6,2));  //2iyol
console.log(oto3.slice(6,8)); //3.yol

console.log(oto);

/* Aşağıda verilen elemanları bir dizi içerisinde saklayınız.

    student A : Yiğit Bilgi 2010;
    student B : Sena Turan 1999;
    student C : Ahmet Turan 1998;

*/

var studentA = ["Yiğit","Bilgi",2010];
var studentB = ["Sena","Turan",1999];
var studentC = ["Ahmet","Turan",1998];

var students = [studentA,studentB,studentC];

console.log(students);

console.log(students[0][0]);  //ilk elemanın ilk elemanı

