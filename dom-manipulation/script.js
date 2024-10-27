const text = [
  {
    quote: `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
    category: "Marilyn Monroe",
  },
  {
    quote: "So many books, so little time.",
    category: "Frank Zappa",
  },
  {
    quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
    category: "Albert Einstein",
  },
  {
    quote: `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`,
    category: "Bernard M. Baruch",
  },
];
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

  if (newQuoteText.value === "" || newQuoteCategory.value === "") {
    return;
  } else {
    quoteDetails.quote = newQuoteText.value;
    quoteDetails.category = newQuoteCategory.value;

    quotes.push(quoteDetails);
    console.log(quotes);

    newQuoteText.value = "";
    newQuoteCategory.value = "";
    showRandomQuote();
  }
}
