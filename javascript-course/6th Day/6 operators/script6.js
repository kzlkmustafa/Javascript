//lesson 6 operators

let val;
const a=10;
const b=5;
const c=0;

// 1-arithmetic operators

val = a+b;
val = a-b;
val = a*b;
val = a/b;
val = a/c;
val = a%b;
//val = a++; //bu hali doğru değil atandıktan sonra bir arttırmalı


// 2-assignment operators(atama operatörleri)

val = a;
val +=a; //val = val + a;
val -=a; //val = val - a;
val *=a; //val = val * a;
val /=a; //val = val / a;
val %=a; //val = val % a;

// 3-compare operators (karşılaştırma operatörleri)

val = a==b;
val = b==c;
val = b===c; //değer kontrolü & type kontrolü
val = 5==='5';
val = a!=b;
val = a!==b;
val = a>b;
val = b<a;
val = a>=b;
val = 5 >= 5;
val = a <= b;

// 4-Mantıksal Operatörler 

    // && (And)(ve)
    // true && true => true
    // true && false => false
    // false && false => false

     val = (a>b) && (a>c)
     val = (a>b) || (a<c)
     val = !(a>b)

    // || (or)(veya)

    // true && true => true
    // true && false => false
    // false && false => false

     

    // ! (not)

     //!true => false
     //!false => true
    
    
console.log(val);
console.log(typeof val);

//11:45 dakika