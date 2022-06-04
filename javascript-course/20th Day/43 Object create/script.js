// Object.create

let personProto = {
    calculateAge : function(){
        return 2022-this.yearOfBirth;
    }
}

let mehmet = Object.create(personProto);

mehmet.name = 'yigit';
mehmet.yearOfBirth = 2010;
mehmet.job = 'student';


let emel = Object.create(personProto,{
    name : {value : 'emel'},
    yearOfBirth : { value : 1989},
    job : {value : 'teacher'}
});

console.log(emel);
console.log(emel.calculateAge());


console.log(mehmet);
console.log(mehmet.calculateAge());
