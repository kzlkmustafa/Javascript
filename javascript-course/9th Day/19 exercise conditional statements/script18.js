//switch statements

// let category = "telefon";

// switch (category) {

//   case "telefon":
//     console.log("telefon kategorisi");
//     break;

//   case "bilgisayar":
//     console.log("telefon kategorisi");
//     break;

//   default:
//     console.log("yanlış kategori");
// }


// let day;

// switch (new Date().getDay) {
//   case 0:
//     day = "pazar";
//     break;

//   case 1:
//     day = "pazartesi";
//     break;

//   case 2:
//     day = "salı";
//     break;

//   case 3:
//     day = "çarşamba";
//     break;

//   case 4:
//     day = "perşembe";
//     break;

//   case 5:
//     day = "cuma";
//     break;

//   case 6:
//     day = "cumartesi";
//     break;

//   default:
//     day = "it is not day";
// }

/*
switch(new Date().getDay()){
  case 0:
  case 6:
    day = "Hafta sonu";
    break;
  
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    day = "Hafta İçi";
    break;
}*/

// console.log(`bugün günlerden ${day}`);


const age = 19;
const firstname = "sena";

switch(true){
  case (age>=0 && age <=12):
    console.log(`${firstname} is a child`);
    break;
  case (age>=13 && age <=19):
    console.log(`${firstname} is a teenager`)
    break;
  default:
    console.log(`${firstname} is a adult`)
}


// if (age>=0 && age <=12){
//   console.log(`${firstname} is a child`);
// }else if (age>=13 && age <=19){
//   console.log(`${firstname} is a teenager`)
// }else{
//   console.log(`${firstname} is a adult`)
// }
