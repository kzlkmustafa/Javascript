//multiple Elements

//class name

//document.getElementsByClassName()

let val;

//val = document.getElementsByClassName('list-group-item');
// val = document.getElementsByClassName('list-group-item')[0];
// val = document.getElementsByClassName('list-group-item')[2];

//val = val[2];

// val[0].style.color='blue';
// val[1].style.fontsize='25px';
// val[2].textContent='new item';

// for(let i=0; i<val.length; i++){
//     console.log(val[i].style.color='red');
//     console.log(val[i].textContent='Selam');
// };


//document.getElementsByTagName()

// val = document.getElementsByTagName('li');
// val = document.getElementById('task-list').getElementsByTagName('a');


// val = document.querySelectorAll('li');

// val.forEach(function(item,index){
//     item.textContent= `${index} -hello`;
// })


val = document.querySelectorAll('li:nth-child(even)');

val.forEach(function(item){
    item.style.background= '#ccc';
})

console.log(val);

