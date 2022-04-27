// Strings

const firstName = 'Mustafa';
const lastName = 'Kızılkaya';
const size1 = 1.86;
let hobbies = "sinema,spor,kitap";
let val;

// string concatenation

val = firstName +" "+ lastName;
val = "Mustafa";
val += " Kızılkaya";

val = "Benim adım "+firstName+" "+lastName+" ve boyum "+size1;

//string length
val = val.length; //kaç karakterden oluştuğunu söyler

//string concat
val = firstName.concat(" ",lastName);

//string uppercase - lowercase
val = val.toUpperCase(); //tüm karakterleri büyük harfli yapar
val = val.toLowerCase(); //tüm karakterleri küçük harfli yapar

val = val[1]; // 0 dan başlayarak kaçıncı karakteri seçeceğini..
val = val.indexOf("Mustafa"); //verilenin değişkende kaçıncı başladığını gösterir 

//substring
val = val.substring(3,8); //aralığı alır

//slice
val = val.slice(6); //aralığı alır 

//string replace
val = val.replace("mustafa","mehmet"); //değiştirme

//trim
val = val.trim(); // başındaki ve sonundaki boşlukları alır

hobbies.split(','); //virgüllerden alt dizeye böler ve döndürür



console.log(val);
console.log(typeof val);

