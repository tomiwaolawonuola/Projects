// ****** SELECT ITEMS **********

const aleRt = document.querySelector('.alert')
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')


//edit option
let editElement;
let editFlag = false; //editFlag will only be true once we click on the edit button
let editId = '';
//*** EVENT LISTENERS ************
//SUBMIT FORM
form.addEventListener('submit', addItem)
//clear items
clearBtn.addEventListener('click', clearItems)


//load items
window.addEventListener('DOMContentLoaded', setupItems)
// delete Items 
//we use event bubbling on the grocery-list to get the delete btn 
//because we cant access it as we had it dynamically
  
//FUNCTIONS

function addItem(e){
   e.preventDefault() 
   //to get the value in the grocery(input) we use the value{property}
   const value = grocery.value
   //we want a unique id
   const id = new Date().getTime().toString()
   //we convert id into a string because latter when it come back, we would need it as a string
   //we however, do not do this in a serious project
   //In a serious project, we may need an external library, calculate and then increase
   //NOW WE HAVE THE VALUE FROM INPUT AND OUT UNIQUE ID
   //once we submit the form we would have three options
    // editElement;
    // editFlag = false;
    //  editId = '';  
    //In JS something can either be truthy or falsy  i.e it is equal to itself or not
    
    if(value && !editFlag){
         createListItem(id, value) 
         setBackToDefault()
         //show container
        container.classList.add('show-container')
        displayAlert('item added to the list', 'success')
        //add to local storage
        addToLocalStorage(id, value)
        //set back to default 
    }
    else if(value  && editFlag){
      editElement.innerHTML = value
      displayAlert('value changed', 'success')
      //edit local storage
      editLocalStorage(id, value)
      setBackToDefault()
    }
    else{
       displayAlert('Empty value', 'danger')
    }

}

//display Alert

function displayAlert(text, action){
    aleRt.textContent = text
    aleRt.classList.add(`alert-${action}`)
    //to remove the alert after it pop up
    setTimeout(function(){
     aleRt.textContent = ''
    aleRt.classList.remove(`alert-${action}`)
    }, 1000)
}

//set back to default

function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editId = '';
    submitBtn.textContent = `submit`;

}

//clear items
function clearItems(){
    //we select everything inside the element(article) we created dynamically
    const items = document.querySelectorAll('.grocery-item');
    // console.log(items)
    if(items.length > 0){
        items.forEach(function(item){
            list.removeChild(item)
        })
    }
    //now we also remove the container so that everything will be empty
    container.classList.remove('show-container')
    displayAlert('items cleared', 'success')
    setBackToDefault()
    localStorage.removeItem('list')
    
}

//deleteItem

function deleteItem(e){
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id
  list.removeChild(element)
  if(list.children.length === 0 ){
    container.classList.remove('show-container')
  }

  displayAlert('item removed', 'success')
  setBackToDefault()
  //remove from local storage
  removeFromLocalStorage(id)
}


//editItem

function editItem(e){
   const element = e.currentTarget.parentElement.parentElement;
   //set edit item
   editElement = e.currentTarget.parentElement.previousElementSibling;
//    console.log(editElement)
 //set form value
   grocery.value = editElement.innerHTML
   editFlag = true;
   editId = element.dataset.id;
   submitBtn.textContent = `edit`;
}



//LOCAl STORAGE
function addToLocalStorage(id, value){
    // console.log('added to local storage')
    // const grocery = {id:id, value:value}
    // since both of them match we can do it this way
    const grocery = {id, value};
    // console.log(grocery)
    //we let items = get list but we don't have list therefore,
    // we set the following tenary operator 
    let items =  getLocalStorage()
    items.push(grocery)
    // console.log(items)
    localStorage.setItem('list', JSON.stringify(items))
   

}
  

 function removeFromLocalStorage(id) {
    let items = getLocalStorage();
    items = items.filter(function(item){
         if(item.id !== id){
            return item
         }
    })
   localStorage.setItem('list', JSON.stringify(items))
 }
 
 
 function editLocalStorage(id, value){
   let items = getLocalStorage()
   items = items.map(function(item){
           if(item.id === id){
               item.value = value
           }
           return item
   })
   localStorage.setItem('list', JSON.stringify(items))
}





function getLocalStorage(){
  return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list'))
                : [];
    
}



//SETUP ITEMS
 function setupItems(){
    let items = getLocalStorage();
    if(items.length > 0){
        items.forEach(function(item){
            createListItem(item.id, item.value)
        })
        
     
    } 
    container.classList.add('show-container')
 } 



 
 function createListItem (id, value){
      const element = document.createElement('article')
        //add class
        element.classList.add('grocery-item')
        //we will add the unique id as a data-set
        const atrr = document.createAttribute('data-id');
        atrr.value = id;
        element.setAttributeNode(atrr)
        element.innerHTML = ` <p class="title">${value}</p>
                <div class="btn container">
                   <button class="edit-btn"> <div class="fas fa-edit"></div> </button>
                   <button class="delete-btn"> <div class="fas fa-trash"></div></button> 
                   </div>`;
        const deleteBtn = element.querySelector('.delete-btn')
        const editBtn = element.querySelector('.edit-btn')
        deleteBtn.addEventListener('click', deleteItem)
        editBtn.addEventListener('click', editItem)
                   //appendChild
        list.appendChild(element)
 }



// const newId = localStorage.setItem('orange', JSON.stringify(['item', 'item2']))
// let oranges = JSON.parse (localStorage.getItem('orange'))
// localStorage.removeItem('oranges')
// console.log(oranges)

// localStorage API
//setItem
//getItem
//removeItem
//save as strings

//SETUP ITEMS



// const dev = document.querySelector('.grocery-container')

// const open = dev.previousElementSibling.children

// if(open.length === 3){
//     console.log('this is truthy')
// }else if(open !== 3){
//     console.log('this is not truthy')
// }else{
//     console.log('hello')
// }



















































