//arrays

let names = ["çınar","sena","ada","yiğit"];
let years = [2017,1999,2012,2010];
let mix = ["Mustafa","kızılkaya",3220,null,undefined,["sinema","kitap"]];


console.log(names[0]);
console.log(names[0]);

//set array item
names[0] = "emel";
names[names.length] = "mehmet"; //length zaten eleman sayısını vereceği için bu durum gep son elemanı değiştirir

//add item
years.push(1986); //en sona yeni eleman ekler
years.unshift(1986); //en başa yeni eleman ekler

//remove item
years.pop(); //son elemanı siler
years.shift(); // ilk elemanı siler

//indexof
let index =names.indexOf("ada");
console.log("index: "+index);

//reverse
names.reverse(); //ögeleri ters çevirir

//sort 
years.sort(); //alfabetik olarak sıralar

//concat
let val = years.concat(names);
console.log(val);

//splice
names.splice(2,1,"seda"); // 2 den başlar 1 eleman siler ve sedayı ekler

//find

//filter

function over18(year){
    let age = 2018 - year;
    return age>=18;
}
let val2 = years.find(over18); //years içindeki her elemanı tek tek fonksiyona soktu
console.log(val2);

console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);
console.log(mix);
