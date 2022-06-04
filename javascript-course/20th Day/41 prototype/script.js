//prototype

let Person = function(name,yearOfbirth,job){
    this.name = name;
    this.yearOfbirth = yearOfbirth;
    this.job = job;
};

Person.prototype.calculateAge = function(){
    return 2022 - this.yearOfbirth;
}

Person.prototype.getName = function(){
    return this.name;
}
Person.prototype.lastName= 'kaya';
let mehmet = new Person('mehmet', 1995, 'teacher');
let yigit = new Person('yiğit',2008,'student');


console.log(mehmet);
console.log(mehmet.calculateAge());
console.log(mehmet.getName());
console.log('*********');
console.log(yigit);
console.log(yigit.calculateAge());
console.log(yigit.getName());

console.log(mehmet.hasOwnProperty('lastname'));
/* 
hasOwnProperty fonksiyonu o objeye sahip mi
 true/false olarak sorgular ve burada false döndürür
  çünkü last name person içinde değil prototype
   içersisinde
*/
