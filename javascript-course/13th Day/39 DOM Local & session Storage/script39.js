//Local Storage

//set item
const firstName = localStorage.setItem('firstName','Mustafa');
const lastName = localStorage.setItem('lastName','Kızılkaya');
let hobies = ['sinema','araba','gezmek'];

//get item
val = localStorage.getItem('firstName');
val = localStorage.getItem('lastName');

//remove item
// localStorage.removeItem('firstName');
// localStorage.removeItem('lastName');

//clear 
// localStorage.clear();

//set array to stroge
localStorage.setItem('hobies',JSON.stringify(hobies));

console.log(val);
console.log(localStorage);


//session Storage
const city = sessionStorage.setItem('city','Ankara');
const country = sessionStorage.setItem('country','Türkiye');

console.log(sessionStorage);

