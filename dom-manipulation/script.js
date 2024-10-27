const quotes = [];
const displayQuote = document.getElementById("quoteDisplay");
const btn = document.getElementById("newQuote");
const newQuoteText = document.getElementById("newQuoteText");
const newQuoteCategory = document.getElementById("newQuoteCategory");

function showRandomQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  displayQuote.innerHTML = quotes[randomNum].quote;
}

btn.addEventListener("click", showRandomQuote);

function addQuote() {
  const quoteDetails = {};

  if (!newQuoteText && !newQuoteCategory) return;

  quoteDetails.quote = newQuoteText.value;
  quoteDetails.category = newQuoteCategory.value;

  quotes.push(quoteDetails);
  console.log(quotes);
}
