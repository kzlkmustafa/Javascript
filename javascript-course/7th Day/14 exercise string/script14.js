var sentence = " Template litearals or template strings is the ability Have multi-line strings without any funny business. ";

var url = "http://github.com/kzlkmustafa/Javascript/tree/main/javascript-course I learning javascript";

//cümle kaç karakterlidir?

console.log(sentence.length);

//cümlede kaç kelime vardır?

console.log(sentence.trim().split(" ").length);

//tüm cümleyi küçük harfe çevir

console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
//cümlenin başındaki ve sonundaki boşlukları sil

console.log(sentence.trim());

// "-" karakterini sil

console.log(sentence.replace("-"," "));

//url içerisindeki str kısmını siliniz

var str = "http://";
console.log(url.substring(str.length));
console.log(url.slice(str.length));

//url hangi protokolü kullanmaktadır
console.log("ilk protokol: "+ url.startsWith("http"));
console.log("ikinci protokol: "+ url.startsWith("https"));

//url, ".com" ifadesini içeriyor mu?
console.log(url.indexOf(".com"));
console.log(url.includes(".com"));
