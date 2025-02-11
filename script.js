// script.js
const quotes = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" }
  ];
  
  // Select elements
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  const newQuoteButton = document.getElementById("new-quote");
  const copyButton = document.getElementById("copy-quote");
  const tweetButton = document.getElementById("tweet-quote");
  
  // Function to generate a random quote
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    quoteElement.textContent = `"${randomQuote.text}"`;
    authorElement.textContent = `- ${randomQuote.author}`;
  
    // Update the Tweet button's link
    tweetButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${randomQuote.text}" - ${randomQuote.author}`
    )}`;
  }
  
  // Copy quote to clipboard
  function copyQuote() {
    const fullQuote = `${quoteElement.textContent} ${authorElement.textContent}`;
    navigator.clipboard.writeText(fullQuote).then(() => {
      alert("Quote copied to clipboard!");
    });
  }
  
  // Event listeners
  newQuoteButton.addEventListener("click", generateQuote);
  copyButton.addEventListener("click", copyQuote);
  