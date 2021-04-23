//using selectors inside the element

const questions = document.querySelectorAll('.question')

questions.forEach(function(question){
     btn =   question.querySelector('.question-btn')
    //  console.log(btn)
    btn.addEventListener('click', function(){
        //to make one open and close the other
        questions.forEach(function(item){
            // console.log(item)
            if(item !== question){
                item.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text')

    //     if(question.classList.contains('show-text')){
    //         question.classList.remove('show-text')
    //     }else{
    //         question.classList.add('show-text')
    //     }
    })
     
})







// // traversing the dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//          btn.addEventListener('click', function(e){
//          question =   e.currentTarget.parentElement.parentElement;
//          question.classList.toggle('show-text')
//          });        
// });

