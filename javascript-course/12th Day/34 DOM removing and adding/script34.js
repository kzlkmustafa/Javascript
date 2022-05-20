const taskList = document.querySelector('#task-list');

//**removing Element
//taskList.remove(); silmek için kullanılır
//taskList.childNodes[1].remove();
//taskList.children[0].remove();
//taskList.removeChild(taskList.children[0]);

//**removing attribute
// taskList.children[0].removeAttribute('class');

// for(let i=0; i<taskList.children.length; i++){
//     taskList.children[i].removeAttribute('class');
// }

// ** replacing Elements
//const cardHeader = document.querySelector('.card-header');
//create element
// const h2 = document.createElement('h2');
// h2.setAttribute('class','card-header');
// h2.appendChild(document.createTextNode('My List'));

// const parent = document.querySelector('.card');
// parent.replaceChild(h2,cardHeader);
// console.log(cardHeader);

// ** classes
let val;
let link;
link = taskList.children[0].children[0];

// val = link.clasName;
// val = link.classList;
// val = link.classList[0];
// val = link.classList[1];

// link.classList.add('new');
// link.classList.remove('new');

//attributes
val = link.getAttribute('href');


console.log(val);