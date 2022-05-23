const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items;

loadItems();

eventListeners();

function eventListeners(){
    form.addEventListener('submit',addNewItem);

    taskList.addEventListener('click',deleteItem);

    btnDeleteAll.addEventListener('click',deleteAllItems);
}

function loadItems(){
    items = getItemsFromLS();

    items.forEach(function(item){
        createItem(item);
    });
};

function getItemsFromLS(){
     if(localStorage.getItem('items')=== null){
        items = [];
     }else{
         items = JSON.parse(localStorage.getItem('items'));
     };
     return items;
};

function setItemtoLS(text){
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items)); // köşeli parantezleri hazır olarak eklemek için stringify

}

function deleteItemFromLS(text){
    items = getItemsFromLS();
    items.forEach(function(item,index){
        if(item === text){
            items.splice(index,1);
        }
    });
    localStorage.setItem('items',JSON.stringify(items));
}

function createItem(text){
    const li = document.createElement('li');
    li.className='list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    const a = document.createElement('a');
    a.classList='delete-item float-end';
    a.setAttribute('href','#');
    a.innerHTML='<i class="fas fa-times"></i>';

    li.appendChild(a); //li'nin içine eklemek için apendChild

    taskList.appendChild(li);

}

function addNewItem(e){
    
    if(input.value === ''){
        alert('Lütfen görev ekleyin..');
        
    };

    createItem(input.value);

    setItemtoLS(input.value);

    input.value='';

    e.preventDefault();
}

function deleteItem(e){
    
    if(e.target.className==='fas fa-times'){
        e.target.parentElement.parentElement.remove();
        console.log(e.target.parentElement.parentElement.textContent);
        deleteItemFromLS(e.target.parentElement.parentElement.textContent);
    };

    e.preventDefault();
}

function deleteAllItems(e) {

    if (confirm('are you sure ?')) {
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
    }
    e.preventDefault();
}
