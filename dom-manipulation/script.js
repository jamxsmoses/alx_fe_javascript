const text = [
  {
    quote: `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
    category: "Inspirational",
  },
  {
    quote: "So many books, so little time.",
    category: "Funny",
  },
  {
    quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
    category: "Inspirational",
  },
  {
    quote: `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`,
    category: "Motivation",
  },
];

const displayQuote = document.getElementById("quoteDisplay");
const btn = document.getElementById("newQuote");

function saveQuotes() {
  localStorage.setItem("text", JSON.stringify(text));

  console.log(JSON.parse(localStorage.getItem("text")));
}

saveQuotes();

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
lastQuoteBtn.style.width = "150px";

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

createAddQuoteForm();

document.body.appendChild(lastQuoteBtn);
const selectEl = document.getElementById("categoryFilter");

function populateCategories() {
  const categoryArr = [];
  for (i = 0; i < text.length; i++) {
    if (!categoryArr.includes(text[i].category)) {
      categoryArr.push(text[i].category);
    }
  }

  console.log(categoryArr);

  categoryArr.map((cat) => {
    const option = document.createElement("option");
    if (!selectEl.querySelector(option[(value = `${cat}`)])) {
      option.value = cat;
      option.textContent = cat;
      selectEl.appendChild(option);
    }
  });
}

console.log(JSON.parse(localStorage.getItem("text")));

function addQuote() {
  const quoteDetails = {};

  if (newQuoteText.value === "" || newQuoteCategory.value === "") {
    return;
  } else {
    quoteDetails.quote = newQuoteText.value;
    quoteDetails.category = newQuoteCategory.value;

    text.push(quoteDetails);
    saveQuotes();

    newQuoteText.value = "";
    newQuoteCategory.value = "";
    showRandomQuote();
    populateCategories();
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
const importBtn = document.getElementById("importFile");

function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function (event) {
    const importedQuotes = JSON.parse(event.target.result);
    text.push(...importedQuotes);
    saveQuotes();
    alert("Quotes imported successfully!");
  };
  fileReader.readAsText(event.target.files[0]);
}

populateCategories();
// localStorage.clear();
// sessionStorage.clear();

function filterQuotes() {
  const selectedCategory = selectEl.value;
  const filteredQuotes = text.filter((quote) => {
    selectedCategory === "All Categories"
      ? true
      : quote.category === selectedCategory;
  });
}

filterQuotes();
