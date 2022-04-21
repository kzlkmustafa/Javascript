//Numbers 

let val;
/*
val = Number('10'); //string ifadeyi number çevirir
val = parseInt('10'); // string ifadeyi tam sayıya çevirir
val = parseFloat('10.5'); // string ifadeyi ondalıklı haliyle sayıya çevirir
val = parseInt('a10a'); // sonda a var ise sadece sayıyı döndürür ama başında var ise NaN döndürür
val = isNaN('10'); //içeriğin NaN olup olmadığını boolean olarak döndürür true/false
*/

//var num= 10.123456789;
//val =num.toPrecision(5);// baştan itibaren kaç sayı getireceğini belirler
//val =num.toFixed(); //virgülden itibaren kaç sayı getireceğini  belirler

val = Math.PI;
val = Math.round(2.4); //yuvarlamak için kullanılır
val = Math.round(2.7);
val = Math.ceil(2.4); //yukarı yuvarlanır
val = Math.ceil(2.6);
val = Math.floor(2.4); // aşağı yuvarlanır
val = Math.floor(2.7);
val = Math.sqrt(64); // köke alır
val = Math.abs(-100); //mutlak değer
val = Math.pow(2,3); //üssü
val = Math.min(1,23,4,6,7,5) //minimum değeri verir
val = Math.max(1,23,4,6,7,5) //maximum değeri verir
val = Math.random() // 0 ile 1  arasında bir sayı döndürür

 
console.log(val);
console.log(typeof val);