const quotes = [
    ["The only way to do great work is to love what you do.", "Steve Jobs"],
    ["Success is not final, failure is not fatal: It is the courage to continue that counts.", "Winston Churchill"],
    ["Believe you can and you're halfway there.", "Theodore Roosevelt"],
    ["The best way to predict the future is to invent it.", "Alan Kay"],
    ["Don't watch the clock; do what it does. Keep going.", "Sam Levenson"],
    ["It always seems impossible until it is done.", "Nelson Mandela"],
    ["Keep your eyes on the stars, and your feet on the ground.", "Theodore Roosevelt"],
    ["It does not matter how slowly you go as long as you do not stop.", "Confucius"],
    ["The only limit to our realization of tomorrow will be our doubts of today.", "Franklin D. Roosevelt"],
    ["The future belongs to those who believe in the beauty of their dreams.", "Eleanor Roosevelt"],
    ["If you want to lift yourself up, lift up someone else.", "Booker T. Washington"],
    ["You are never too old to set another goal or to dream a new dream.", "C.S. Lewis"],
    ["Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", "Albert Schweitzer"],
    ["Your attitude, not your aptitude, will determine your altitude.", "Zig Ziglar"]
  ];
  
function randomQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    return quote[0];
}

function randomAuthor() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    return quote[1];
}
  
    // I change this soon i promise
  // function displayRandomQuotes() { 
  // //   document.getElementById('quotes').innerHTML = randomString();
  //     document.addEventListener('DOMContentLoaded', (event) => {
  //         const clicButton = document.getElementById('quotesButton');
  //     clicButton.addEventListener('click', () => {
  //         const random = randomString();
  //         document.getElementById('quoteDisplay').innerHTML = random;  
  //     });
  // });
  // }
  
  // displayRandomQuotes();
  
  function displayRandomQuote() { 
    const clicButton = document.getElementById('quotesButton');
    clicButton.addEventListener('click', () => {
        const RandomQuote = randomQuote();
        const RandomAuthor = randomAuthor();
        document.getElementById('quoteDisplay').innerHTML = RandomQuote;
        document.getElementById('author').innerHTML = RandomAuthor;
  });
}
  
  document.addEventListener('click', displayRandomQuote);
  