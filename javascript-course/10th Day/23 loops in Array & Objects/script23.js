//loops in Array & Objects

let cars =["BMW", "Mercedes","Toyota"];
let people =[
    {firstname:"Ada", lastname:"Bilgi"},
    {firstname:"yiğit", lastname:"Turan"},
    {firstname:"Çınar",lastname:"Turan"}
]

//Arrays
for (i=0; i<cars.length;i++){
    console.log(cars[i]);
};

//Objects
for (let k=0; k<people.length; k++){
    console.log(people[k].firstname);
}

//for-in
    //Arrays
    for(let j in cars){
        console.log(`index : ${j} value:${cars[j]}`);
    }

    //objects
    for(let l in people){
        console.log(`index : ${l} value:${people[l]}`);
    }

//foreach
    //Arrays
    cars.forEach(function(item){
        console.log(item);
    });

    //objects
    people.forEach(function(item){
        console.log(item);
    });




//map : returns an array

let val = people.map(function(item){
    return item.firstname + " " + item.lastname;
});

console.log(val);

let numbers = [1,5,6,9,10];

let num = numbers.map(function(n){
    return n*n;
});

console.log(num);