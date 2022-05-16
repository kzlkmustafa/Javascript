//function Declarations

function sum(a,b) {
    var c=a+b;
    return c;
}
console.log(sum(10,20));




// Function Expressions

const sum2= function(a,b){
    if(typeof a ==='undefined'){
        a=0;
    }
    if(typeof b ==='undefined'){
        b=0;
    }
    var c=a+b;
    return c;
}
console.log(sum2(23,34));
console.log(sum2(23));

/*yukarıdakinin yerine
 es6 ile beraber aşağıdaki gibi yazabiliriz */

 const sum3= function(a=0,b=0){

    var c=a+b;
    return c;
}
console.log(sum2(67,34));
console.log(sum3(67));


function sumAll(){
    var total =0;
    for(let i=0; i<arguments.length; i++){
        total+=arguments[i];
    }
    return total;
}
