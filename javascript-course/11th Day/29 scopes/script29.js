//scopes

// ** Global Scops
var name = "Çınar";

function logName(){
    var name = "Ada";
    var age ="12";
    console.log("function scope",name);
}

if(true){
    var age = 30;
    console.log("block scope", name,age);
}

console.log(age);

logName();
console.log(name);

// ** local Scops

    //fonksiyon içerisinde tanımlanan değişkenler local scopes olur.
    //**Block'lar yeni scope oluşturmaz.*/
    //ES6 ile gelen let ve cosnt block scope oluşturur.

    