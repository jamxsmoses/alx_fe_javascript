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

function textToLocalStorage() {
  localStorage.setItem("text", JSON.stringify(text));
}

textToLocalStorage();

const sesStorage = JSON.parse(sessionStorage.getItem("lastViewed"));

function loadSesStorage() {
  if (sesStorage === null) {
    displayQuote.innerHTML = "You haven't viewed any quotes.";
  } else {
    displayQuote.innerHTML = sesStorage;
  }
}

const lastQuoteBtn = document.createElement("button");
lastQuoteBtn.innerHTML = "Last Viewed Quote";

document.body.appendChild(lastQuoteBtn);

lastQuoteBtn.addEventListener("click", loadSesStorage);

function showRandomQuote() {
  const quotes = JSON.parse(localStorage.getItem("text"));
  //   console.log(quotes);
  const randomNum = Math.floor(Math.random() * quotes.length);
  displayQuote.innerHTML = quotes[randomNum].quote;

  function lastViewedQuote() {
    const lastViewed = (displayQuote.innerHTML = quotes[randomNum].quote);
    sessionStorage.setItem("lastViewed", JSON.stringify(lastViewed));
  }

  lastViewedQuote();
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

// localStorage.clear();

createAddQuoteForm();

function addQuote() {
  const quoteDetails = {};

  if (newQuoteText.value === "" || newQuoteCategory.value === "") {
    return;
  } else {
    quoteDetails.quote = newQuoteText.value;
    quoteDetails.category = newQuoteCategory.value;

    text.push(quoteDetails);
    textToLocalStorage();

    newQuoteText.value = "";
    newQuoteCategory.value = "";
    showRandomQuote();
  }
}

// console.log(localStorage);
const exportBtn = document.getElementById("exportBtn");

function exportToJsonFile() {
  const a = document.createElement("a");
  const quotes = localStorage.getItem("text");
  const blob = new Blob([quotes], { type: "application/json" });

  const url = URL.createObjectURL(blob);
  a.href = url;
  a.download = "My-Quotes.json";

  a.click();

  a.remove();
}

exportBtn.addEventListener("click", exportToJsonFile);
