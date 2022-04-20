//lesson 4 type conversion

let val;

//number to string
val = String(10);

// bool to string

val = String(true);

// date to string
val = String(new Date());

//array to string
val = String([1,2,45,65]);

// toString() direkt ifadeyi string hale çevirir
val =(10).toString();
val =(false).toString();

// string to number
val = Number("10");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("a");
val = Number([1,2,3,4])

// parseInt tamsayıya döndürür
// parseFloat sayıya döndürür
val =parseInt("10");
val =parseInt("10.5");
val =parseFloat("10.5");


console.log(val);
console.log(typeof val);
console.log(val.length); //length uzunluğu verir (string ifadeye özgü)

