//get omly unique categories - hardestOne
//iterate over categories return buttons
//make sure to select buttons when they are available


const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Sreak Dinner",
    category: "dinner",
    price: 56.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];



const sectionCenter = document.querySelector('.section-center');

const filterBtns = document.querySelectorAll('.filter-btn');

//load items
window.addEventListener('DOMContentLoaded', function(){
       displayMenuItems(menu)
       
  
});


const number = [1,2,3,4,5,7,7,8,8,9,9,0]

const sumSum = number.reduce(function(total, number){
            return total + number
}, )

console.log(sumSum)


//we are doing it like this so that we wont need to type it all out again
//menu is sub for menuItems and when we put menu as a parameter it still works 

function displayMenuItems(menuItems){
  //we map the menu in order to put the items it contains inside our html
   let displayMenu = menuItems.map(function(item){
      //  return item 
      return ` <article class="menu-item">
                  <img src=${item.img} class="photo" alt=${item.title}>
                  <div class="item-info">
                    <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                    </header>
                   <p class="item-text">${item.desc}</p>
                   </div>
              </article>`
  })
 //now we join all of them together 
 displayMenu = displayMenu.join('')
 //adding to the sectionCenter
 sectionCenter.innerHTML = displayMenu   
}

//filter items

filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(e){
              //  console.log(e.currentTarget.dataset.name)
         const category = e.currentTarget.dataset.name;
          const menuCategory = menu.filter(function(menuItem){
                
                if(menuItem.category === category){
                        return menuItem;
                }
          })
          //  console.log(menuCategory) this is the three items selected per button
             if(category === "all"){
               displayMenuItems(menu)
             }else{
               displayMenuItems(menuCategory)
             }
          // console.log(menuCategory)
          //  displayMenuItems(menu)
        })
       
})


// const menuC = menu.filter(function(menuCategory){
//              const category = 
//             //  console.log(category)
//              return menuCategory.category === 'shakes'
            
// })
// console.log(menuC)


// const sectionCenter = document.querySelector('.section-center');

// window.addEventListener('DOMContentLoaded', function(){
//   //we map the menu in order to put the items it contains inside our html
//   let displayMenu = menu.map(function(item){
//       //  return item 
//       return ` <article class="menu-item">
//                   <img src=${item.img} class="photo" alt=${item.title}>
//                   <div class="item-info">
//                     <header>
//                   <h4>${item.title}</h4>
//                   <h4 class="price">${item.price}</h4>
//                     </header>
//                    <p class="item-text">${item.desc}</p>
//                    </div>
//               </article>`
//   })
//  //now we join all of them together 
//  displayMenu = displayMenu.join('')
//  //adding to the sectionCenter
//  sectionCenter.innerHTML = displayMenu
// });


