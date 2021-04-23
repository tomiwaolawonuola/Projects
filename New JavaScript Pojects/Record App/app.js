
// ****** SELECT ITEMS **********

const aleRt = document.querySelector('.alert')
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')


//edit option
let editElement;
let editFlag = false; //editFlag will only be true once we click on the edit button
let editId = '';



//Event Listeners
form.addEventListener('submit', formItems)
//clearItems
clearBtn.addEventListener('click', clearAll)
//windowLoaded
window.addEventListener('DOMContentLoaded', loadItem)

function loadItem () {
  let items = getLocalItem()
  items.forEach(function(item){
    setItemForAll(item.id, item.value)
  })

  container.classList.add('show-container')

}




//FUNCTIONS

function formItems (e){
    e.preventDefault()
      const value = grocery.value
      const id = new Date().getTime().toString()
      const attr = document.createAttribute('data-name')
      attr.value = id
    if(value  && !editFlag){
       setItemForAll(id, value)
      container.classList.add('show-container')
      getAlert('item added', 'success')
      setBackToDefault()
      setLocalStorage(id, value)
    }else if(value && editFlag){
        editElement.innerHTML = grocery.value;
        getAlert('item edited', 'success')
        setBackToDefault()
        editLocalStorage(id, value)
    }
    else{
        getAlert('enter a value', 'danger')
    }

}


//set items for all

function setItemForAll(id, value){
      const attr = document.createAttribute('data-name')
      attr.value = id
      const element = document.createElement('article')
      element.setAttributeNode(attr)
      element.classList.add('grocery-item')
      element.innerHTML = ` <p class="title">${value}</p>
                <div class="btn container">
                   <button class="edit-btn"> <div class="fas fa-edit"></div> </button>
                   <button class="delete-btn"> <div class="fas fa-trash"></div></button> 
                   </div> `;
      const editBtn = element.querySelector('.edit-btn')
      editBtn.addEventListener('click', editItem)
      const deleteBtn = element.querySelector('.delete-btn')
      deleteBtn.addEventListener('click', deleteItem)
      list.appendChild(element)
}



//Alert functions

function getAlert (text, action){
      aleRt.textContent = text
      aleRt.classList.add(`alert-${action}`)
    setTimeout(function(){
     aleRt.textContent = ''
      aleRt.classList.remove(`alert-${action}`)
    }, 1000)
}

//back to Default

function setBackToDefault(){
    grocery.value = ''
    submitBtn.textContent = 'Add'
    editFlag = false;
    editId = '';
    editElement = '';
}


//clear All Items

function clearAll( ){
  const items = document.querySelectorAll('.grocery-item')
  if(items.length > 0){
    items.forEach(function(item){
      list.removeChild(item)
    })
  }
  getAlert('items cleared', 'success')
  setBackToDefault()
  container.classList.remove('show-container')
  localStorage.removeItem('list')
  

}

//Edit Item

 function editItem (e){
     submitBtn.textContent = 'edit'
     editFlag = true;
     editElement = e.currentTarget.parentElement.previousElementSibling
     grocery.value = editElement.innerHTML;
     
 }


//Delete Item

function deleteItem(e){
    
    const item = e.currentTarget.parentElement.parentElement
    const id = item.dataset.name
    list.removeChild(item)
    if(list.children.length === 0){
        container.classList.remove('show-container')
    }
     getAlert('item removed', 'success')
     setBackToDefault()
     deleteLocalStorage(id)
  }


  //local storage

function setLocalStorage(id, value){
  const  grocery = {id, value}
  let items = getLocalItem()
  items.push(grocery) 
  localStorage.setItem('list', JSON.stringify(items))
     
}



//Edit local Storage

function editLocalStorage(id, value){
  let items = getLocalItem()
  items = items.map(function(item){
    if(item.id === id){
      item.value = value
    }
    return value
  })

   localStorage.setItem('list', JSON.stringify(items))
}


//deleteLocal Storage


function deleteLocalStorage(id){
  let items = getLocalItem();
    items = items.filter(function(item){
         if(item.id !== id){
            return item
         }
    })
   localStorage.setItem('list', JSON.stringify(items))
      
}


function getLocalItem (){
  return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];

}



// let items = [1, 2, 4, 5, 6, ]
// let counter = 12

// itemss =  items.map(function(item){
//         return item + counter
// })


let total = 0;
let count = 1

while (count <= 10){
  total += count;
  count +=1
}

console.log(total)//55





