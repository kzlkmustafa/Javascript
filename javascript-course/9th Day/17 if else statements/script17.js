// if else statements

const firstname = "sena";
const age = 19;
const isStudent = true;
const school = "university";

if(firstname === "sena"){
  console.log("Merhaba Sena");
}

if(age === 19){
  console.log("yaşınız 19");
}

if(isStudent){
  console.log("Merhaba Öğrenci")
}else{
  console.log("merhaba işler nasıl")
}
if(age>=18){

  if((school == "university") || (school == "High school")){
    console.log("Ehliyet alabilirsiniz")
  }
  // }else{
  //   console.log("eğitim durumunuz yetersiz")
  // }

}else{
  console.log("ehliyet alamazsınız")
}

if (age>0 && age <12){
  console.log(`${firstname} is a child`);
}else if (age>=13 && age <=19){
  console.log(`${firstname} is a teenager`)
}else{
  console.log(`${firstname} is a adult`)
}

//undifined
let id ="123321";

if (typeof id !== "undefined"){
  console.log("id:"+ id)
}else{
  console.log("no id");
}

