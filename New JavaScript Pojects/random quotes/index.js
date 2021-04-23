
// const quotes = [ 'It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it. "Maurice Switzer"', 
//                   'The fool doth think he is wise, but the wise man knows himself to be a fool. "William Shakespeare" ',
//                   'Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect). "Mark Twain"',
//                   'When someone loves you, the way they talk about you is different. You feel safe and comfortable "  Jess C"',
//                   'Knowing yourself is the beginning of all wisdom. "Aristotle"',
//                   'The only true wisdom is in knowing you know nothing. "Socrates"',
//                   'The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom. "Isaac Achimov"',
//                   'Count your age by friends, not years. Count your life by smiles, not tears. "John Lennon"',
//                   '  Hold fast to dreams, For if dreams die Life is a broken-winged bird, That cannot fly. " Langston Hughes" ', 
//                   'In a good bookroom you feel in some mysterious way that you are absorbing the wisdom contained in all the books through your skin, without even opening them. "Mark Twain"'];

// const author = ['Maurice Switzer', ]

//                   const btn = document.getElementById('btn');


//                   btn.addEventListener('click', randomQuotes)
                  
//                   function randomQuotes(random, item){
//                        random = Math.floor(Math.random() * quotes.length)
//                        item = document.querySelector('p')
//                        item.classList.add('parag')
//                        item.innerHTML = quotes[random]
                       
//                   }

  const authorQuotes = [
{ author: 'Nelson Mandela', quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall"'},
{ author: 'Maurice Switzer', quote: '"It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it"'},
{ author: 'William Shakespeare', quote: '"The fool doth think he is wise, but the wise man knows himself to be a fool"'},
{ author: 'Jessy C', quote: '"When someone loves you, the way they talk about you is different. You feel safe and comfortable"'},
{ author: 'Socrates', quote: '"Knowing yourself is the beginning of all wisdom"'},
{ author: 'Isaac Achimov', quote: '"The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom"'},
{ author: 'John Lenon', quote: '"Count your age by friends, not years. Count your life by smiles, not tears"'},
{ author: 'Langston Huges', quote: '"Hold fast to dreams, For if dreams die Life is a broken-winged bird, That cannot fly"'},
{ author: 'Mark Twain', quote: '"In a good bookroom you feel in some mysterious way that you are absorbing the wisdom contained in all the books through your skin, without even opening them"'},
{ author: 'Mark Twain', quote: '"Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect)"'},
];

     const btn = document.getElementById('btn');


                  btn.addEventListener('click', randomQuotes)
                  
                  function randomQuotes(){
                       let random = Math.floor(Math.random() * authorQuotes.length)
                       let randomAuthor = authorQuotes[random].author
                       let randomQuote = authorQuotes[random].quote
                       let h = document.querySelector('.parag')
                       console.log(h)
                       h.textContent = randomQuote
                       let p = document.querySelector('p')
                       p.textContent = randomAuthor
                       
                       
                  }



// let quotes2 = [
// {‘author’: ‘Nelson Mandel’, ‘quote’: ‘”The greatest glory in living lies not in never falling, but in rising every time we fall.”‘},
// {‘author’: ‘Walt Disney’, ‘quote’: ‘”The way to get started is to quit talking and begin doing.”‘},
// {‘author’: ‘Steve Jobs’, ‘quote’: ‘”Your time is limited, so don\’t waste it living someone else\’s life. Don\’t be trapped by dogma – which is living with the results of other people\’s thinking.”‘},
// {‘author’: ‘Eleanor Roosevelt’, ‘quote’: ‘”If life were predictable it would cease to be life, and be without flavor.”‘},
// {‘author’: ‘Oprah Winfrey’, ‘quote’: ‘”If you look at what you have in life, you\’ll always have more. If you look at what you don\’t have in life, you\’ll never have enough.”‘},
// {‘author’: ‘James Cameron’, ‘quote’: ‘”If you set your goals ridiculously high and it\’s a failure, you will fail above everyone else\’s success.”‘},
// {‘author’: ‘John Lennon’, ‘quote’: ‘”Life is what happens when you\’re busy making other plans.”‘}
// ];

// const quoteText = document.querySelector(‘.quoteText’);
// const authorName = document.querySelector(‘.authorName’);
// const button = document.querySelector(‘.button’);

// button.addEventListener(‘click’, getRandomQuote2);

// function getRandomQuote2() {
// let index = Math.floor(Math.random() * quotes2.length);
// let randomQuote = quotes2[index].quote;
// let randomAuthor = quotes2[index].author;
// console.log(`Quote: ${randomQuote} | Author: ${randomAuthor}`);
// quoteText.textContent = randomQuote;
// authorName.textContent = randomAuthor;
// }



