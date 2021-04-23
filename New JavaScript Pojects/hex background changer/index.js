
const hex = [0, 1, 2, 3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');


btn.addEventListener('click', function(){
   let hexColor = '#'
   for(let i = 0; i < 6; i++){
       hexColor += hex[randomNumber()]
       console.log(hexColor)
   }
  let h = document.querySelector('.color')
  h.textContent = hexColor
  document.body.style.backgroundColor = hexColor
   
})





function randomNumber (){
    return random = Math.floor(Math.random() * hex.length)
}



// const number = [1, 2, 4, 5, 6, 6, 7, 9, 0]
// let num1 = 0
// for(let i = 0; i < 6; i++){
//     num1 += number[randomNum()]
//     console.log(num1)
// }



// function randomNum (){
//     return random = Math.floor(Math.random() * number.length)
// }


