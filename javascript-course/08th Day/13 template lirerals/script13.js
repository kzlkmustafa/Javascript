const fullName ="Mustafa Kızılkaya";
const city = "Ankara";
const size1 = 3234;

let val;

//normalde
val = "my name is "+fullName+" I'm "+(3236-size1)+" years old and I live in "+ city;

//template ile
val = `my name is ${fullName} I'm ${3236-size1} years old and I live in ${city}`;

//template ile 2(ternary operator)
val = `my name is ${fullName} I'm ${(3236-size1>18)?`over 18`:`under 18`} and I live in ${city}`;

console.log(val);
