// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const toggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links');

toggle.addEventListener('click', function(){
//  if(links.classList.contains('show-links')){
//        links.classList.remove('show-links')
//  }
//  else{
//      links.classList.add('show-links')
//  }
//or we can just use one line of code like so,
 links.classList.toggle('show-links')
})

