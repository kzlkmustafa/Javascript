// object literals

// let yigit = {
//     name : 'yigit',
//     yearOfBirth : 2010,
//     job : 'student'
// }


let Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        return 2022 - this.yearOfBirth;
    }
}

let yigit = new person('yigit',2010,'student');
let mehmet = new person('mehmet',1995,'teacher');

console.log(yigit.name);
console.log(yigit.yearOfBirth);
console.log(yigit.job);
console.log(yigit.calculateAge());

console.log('*************');

console.log(mehmet.name);
console.log(mehmet.yearOfBirth);
console.log(mehmet.job);
console.log(mehmet.calculateAge());
