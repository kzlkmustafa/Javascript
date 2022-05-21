//Mouse events

const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');

// btn.addEventListener('click',eventHandler);
// ul.addEventListener('mouseover',eventHandler);

//double click
//btn.addEventListener('dblclick',eventHandler);

// //mouse  down
// btn.addEventListener('mousedown',eventHandler);
// //mouse up
// btn.addEventListener('mouseup',eventHandler);

// //mouse enter
// ul.addEventListener('mouseenter',eventHandler);
// //mouse leave
// ul.addEventListener('mouseleave',eventHandler);

// //mouse over
// ul.addEventListener('mouseover',eventHandler);
// //mouse out
// ul.addEventListener('mouseout',eventHandler);

//mouse move
const h5 = document.querySelector('h5');
ul.addEventListener('mousemove',eventHandler);


 
function eventHandler(event){
    console.log(`event type : ${event.type}`);

    h5.textContent = `Mouse X : ${event.offsetX} Mouse Y : ${event.offsetY}`;
    
}

