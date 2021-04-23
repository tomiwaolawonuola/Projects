
const fullName = document.getElementById('name')
const age = document.getElementById('age')
const message = document.querySelector('.message')
const submitBtn = document.getElementById('submit')


 
const form = document.getElementById('form')


let editFlag = false;
let editName;
let editAge

const addItems = (e)=>{
    e.preventDefault()
    const ageInput = age.value
    const nameInput = fullName.value
  

    if(ageInput && nameInput && !editFlag ){
       creatItem(ageInput, nameInput)
       setBackToDefault()
       displayMessage('updated successfully')
     }
     else if(editFlag == true){
        //  //functionality is in editBtn
          editName.innerHTML = fullName.value
          editAge.innerHTML =age.value
            
              setBackToDefault()
     }
    else{
       displayMessage('enter a value')
    }

}



//function

const creatItem = (ageInput, nameInput)=>{
       const newDiv = document.getElementById('article')
     const element = document.createElement('article')
        element.innerHTML= `<p class="background"> ${nameInput} </p>
        <p  class="background"> ${ageInput} </p>
        <button class="edit-Btn"> Edit </button>
        <button class="delete-Btn"> Delete </button>
        `;
        const editBtn = element.querySelector('.edit-Btn')
//editbtn
        editBtn.addEventListener('click', (e)=>{
            e.preventDefault()
            submitBtn.textContent = 'edit'
            editFlag = true;
            editName = e.currentTarget.previousElementSibling.previousElementSibling;
            editAge = e.currentTarget.previousElementSibling
            fullName.value = editName.innerHTML
            age.value = parseInt(editAge.innerHTML)
             
             
        })
        
//delebtBtn
        const deleteBtn = element.querySelector('.delete-Btn')
        deleteBtn.addEventListener('click', (e)=>{
            e.preventDefault()
            newDiv.removeChild(element)
            displayMessage('item deleted successfully')
        })
        
        newDiv.appendChild(element)
}



function setBackToDefault(){
 fullName.value= ''
 age.value= ''
 submitBtn.textContent = 'submit'
 editFlag = false;
}

const displayMessage = (text)=>{
    message.innerHTML = text;
    setTimeout(function(){
    message.innerHTML = ''
}, 1000)

}


form.addEventListener('submit', addItems)

