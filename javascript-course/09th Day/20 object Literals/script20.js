// object Literals

let val;

let person = {
    firstname : "çınar",
    lastname : "turan",
    age : 7,
    hobbies : ["Music","Game"],
    address : {
        city : "Ankara",
        country : "Türkiye"
    },
    getBirthYear : function(){
        return 2022 - this.age;
    }

};

val = person;
val = person.firstname;
val = person.lastname;
val = person["firstname"];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.hobbies.length;
val = person.address;
val = person.address.city;
val = person.address["city"];
val = person.getBirthYear();


let people = [
                {firstname : "Çınar",lastname:"Turan"},
                {firstname : "Sena",lastname:"Turan"},
                {firstname : "Seda",lastname:"Turan"}
             ];

val = people[2];
val = people[2].firstname;

for(let i =0; i<people.length; i++){
    console.log(people[i]);
}


// console.log(val);
// console.log(typeof person);
