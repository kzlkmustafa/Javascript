var num = 15.123456789;

//toplamda 3 basamaklı sayı kullan
console.log(num.toPrecision(1));

//ondalık kısmı 3 basamakla sınırla

console.log(num.toFixed(3));
 
//en yakın sayıya yuvarla

console.log(Math.round(num));

//aşağı yuvarla

console.log(Math.floor(num));

//yukarı yuvarla 

console.log(Math.ceil(num));

//1,2,10,56,20 sayılarından en küçük ve en büyük

console.log(Math.min(1,2,10,56,20));

console.log(Math.max(1,2,10,56,20));

//sayı aralığının kullanıcı belirleyeceği rastgele bir sayı

var min = 50;
var max = 100;

console.log(min+Math.random()*(max-min));

/* mesai ile maaş hesabı
maaş = 3700 tl
mesai = 10.3 tl
ağustos yı 42 saat mesai ile toplam brüt maaş nedir?
brüt maaşın %25 kesinti olduğuna göre alınacak maaş nedir?
*/

var maas = 3700;
var mesai = 10.3;
var yapılanMesai = 42;
var brutMaas = maas+(yapılanMesai*mesai);
var alınanMaas = brutMaas-(brutMaas*0.25);

console.log("maaş: "+ maas);
console.log("Brüt Maaş: " + brutMaas);
console.log("Alınan Maaş: " + alınanMaas.toFixed(5));
