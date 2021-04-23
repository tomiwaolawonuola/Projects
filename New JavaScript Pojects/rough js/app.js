

// let a = 3
// let b = 5

// let greater = b > a ? console.log('true'): console.log('false')


// function simpleNumbers(num1, num2){
//     return num1 + num2
// }

// const number = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// function add(e, idx){
//     return e 
// }

// console.log(number.find(add))



// const num1 = number[3] * simpleNumbers(2, 9)
// const num2 = number[1] * simpleNumbers (10, 20)
// console.log(num1)
// console.log(num2)


// const dMap = number.map(function(num1, num){
//            return num1, num
// })


// const filta = number.filter(function(num){
//       return num < 7
// })

// console.log(filta)

//    number.forEach(function(item){
//      console.log(item + 2)
// })

// const solta = number.sort()
// console.log(solta)

// var arr = new Array("orange", "mango", "banana", "sugar");
// console.log(arr.sort())

// let sorted = arr.sort()

// console.log(`The returned sorted array: ${sorted}`)



// const a = 5
// if(a < 4){
//     console.log('this is cool')

// }else if(a < 5){
//     console.log('this pretty cool')
// }else{
//     console.log('this is false')
// }


// const time = 4;

// if(time > 1){
//     console.log('good evening')
// }else if(time < 5){
//     console.log('good afternoon')
// }else{
//     console.log('good day')
// }


// let flag = 'not empty';

// if(flag){
//     console.log(1)
// }


// document.addEventListener('DOMContentLoaded', showAge)


// function showAge (date, action){
//        date = new Date().getSeconds()
//        let minutes = new Date().getMinutes()
//        let hour = new Date().getHours()
//        const hOne = document.querySelector('h1')
//        hOne.textContent = `${hour}:${minutes}:${date}` 
//        hOne.classList.add('color')
   
// }


// //set interval wil make it to count-down in real time, it calls the function by the minutes or second by set for it
// //we bring out this countdown outside the function code block because, it is a function it self
// //that accepts a call-back function and we cant invoke a function within itself

// let countdown = setInterval(showAge, 1000)

let edit = false;

const form = document.querySelector('.form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    const input = document.getElementById('item')
    const item = input.value
    const itemValue = document.querySelector('.element')
    // console.log(itemValue)
    itemValue.textContent = item
    const container = document.querySelector('.container');
    const btn = container.querySelector('button')
     btn.addEventListener('click', clearValue)
    if(item !== ''){
          container.appendChild(itemValue)
          container.classList.add('show')
           warning('value entered')
          time()
    } else if(item === ''){
        warning('enter a value')
        time()
    }
    displayDefault()
    setLocalStorage(item)
})


//clearValue

function clearValue(e){
    e.preventDefault()
    const container = document.querySelector('.list-container');
    let children = container.querySelector('p')
    container.removeChild(children)
    container.classList.remove('show')
    warning('value cleared')
     time()
}


function displayDefault(){
    const input = document.getElementById('item')
    input.value = '';
}

function warning (text){
    const para = document.querySelector('.warning')
    para.textContent = text
}

function time() {
    return setTimeout(function(){
        warning('')
    }, 1000)
}



//setlocalStorage

function setLocalStorage(item){
    const myValues = item;
    let items = getLocalStorage()
    items.push(myValues)
    localStorage.setItem('list', JSON.stringify(items))
    
}

function getLocalStorage(){
  return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list'))
                : [];
    
}


window.addEventListener('DOMContentLoaded', function(){
  
})



 //     setTimeout(function(){
    //     hOne.textContent = '';
    //     hTwo.textContent = '';
    //     aleRt.classList.remove(`alert-${action}`)
    // }, 1000)


    // let surname = 'Adebayo'
    // const names = ['busayo', 'biola', 'temidayo', 'titi', 'tope'];
    // names.forEach(function(name, idx){
    //     console.log(`${surname} ${name}`)
    // });
    
    // const surname = 'Ajanlekoko';
    // 
     



//    let last = arr.indexOf('arrow')
//    arr.length = 12
//    console.log(arr.length)
//    console.log(arr)

   //array length deals with index

//    let n = 300
//  let each =  arr.forEach(function(ar, idx){
//     //    console.log(ar[1])
//    })

// let mul = arr.join('')




// if(arr){
//    arr.map(function(ar){
//       console.log (`${ar} orange`)
//    })
// }

// let date = new Date()

// let today = date.getDate()
// console.log(today)
 
// console.log(date)

// let school = 'AAUA';

// if(school === 'AAUA'){
//     console.log(school)
// }




// localStorage.setItem('name', 'tomiwa');

// let get = localStorage.getItem('name')
// console.log(get)


//to set more than one value

// const ari = ['ajose', 'paul', 'omoba', 'ogene', 'modeupe', 'adewale']
// console.log(ari)


// const obj = {
//     name: 'adebola',
//     home: 'Owo',
//     church: 'Church of Christ',
//     school: 'Oroke High School'

// }

// const items = localStorage.getItem('list') 
//               ? JSON.parse(localStorage.getItem('list')) : [];

// items.push(obj)
// console.log(items)


// const open = document.querySelector('.open')

// open.addEventListener('click', bingOpen)

// function bingOpen (){
//     document.body.classList.toggle('white')
// }






// items.filter(function(item){
//     if(item.name === 'adebola'){
//         console.log(JSON.stringify(item.name))
       
//     }
// });






// if(items !== []){
//     JSON.parse(localStorage.getItem('list'))
// }





// localStorage.setItem('obj', JSON.stringify(obj))

// let getIt = JSON.parse(localStorage.getItem('obj'))

// console.log(getIt)

// localStorage.setItem('array', JSON.stringify(ari) )

// let bring = JSON.parse (localStorage.getItem('array'))

// document.body.innerHTML = `<h1> ${bring} </h1>`;

// const container = document.querySelector('.container')
// console.dir(container)

// let element = document.createElement('h1')
// element.innerText = 'this is correct';
// container.classList.add('color')


// let a = [1, 2, 3, 4, 5, 6, '1', '2', '3'] 

// function rap(e, ac, idx, arr){
//           return a.length
// }

// console.log(a.reduce(rap))








// akd = a.filter(function(e){
//     return typeof(e) === 'number'
// })

// console.log(akd)


// let ab = a.filter(e => typeof(e) === 'string')

// console.log(ab)
// let abc = a.filter(e => typeof(e) === 'number')
// console.log(abc)



// function functionThatGoesInsideFilter(element, index, array) {
//   if (element % 2 === 0) {
//     return true
//   } else {
//     return false
//   }
// }

// let ac = [1, 2, 3]
// console.log(ac.filter(functionThatGoesInsideFilter))

// console.log(ac.map(functionThatGoesInsideFilter))



// function factor (n){
//     if(n===0){
//         return 1
//     }
//     else{
//         return factor(n-1) 
//     }
// }

// console.log(factor(8));




// let amount = 10
// let balance = 100


// while(amount <= 1000 ){
//     balance += amount
    
// }

// console.log(amount)




// if(amount > balance){

//     console.log(`I can't afford it`)
// }else{
//     console.log('I can afford it')
// }










