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

function showRandomQuote() {
  const randomNum = Math.floor(Math.random() * text.length);
  displayQuote.innerHTML = text[randomNum].quote;
}

btn.addEventListener("click", showRandomQuote);

function createAddQuoteForm() {
  const newDiv = document.createElement("div");
  const newQuoteEl = document.createElement("input");
  const newCategoryEl = document.createElement("input");
  const newBtnEl = document.createElement("button");

  newQuoteEl.type = "text";
  newQuoteEl.id = "newQuoteText";
  newQuoteEl.placeholder = "Enter a new quote";

  newCategoryEl.type = "text";
  newCategoryEl.id = "newQuoteCategory";
  newCategoryEl.placeholder = "Enter quote category";

  newBtnEl.innerHTML = "Add Quote";
  newBtnEl.addEventListener("click", addQuote);

  newDiv.appendChild(newQuoteEl);
  newDiv.appendChild(newCategoryEl);
  newDiv.appendChild(newBtnEl);
  document.body.appendChild(newDiv);
}

createAddQuoteForm();

function addQuote() {
  const quoteDetails = {};

  if (newQuoteText.value === "" || newQuoteCategory.value === "") {
    return;
  } else {
    quoteDetails.quote = newQuoteText.value;
    quoteDetails.category = newQuoteCategory.value;

    text.push(quoteDetails);

    newQuoteText.value = "";
    newQuoteCategory.value = "";
    showRandomQuote();
  }
}
