const getQuoteBtn = document.querySelector("#get-quote");
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

getQuoteBtn.addEventListener("click", loaddata);

function loaddata() {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      let quoteText = data.data[0].quoteText;
      let authorText = data.data[0].quoteAuthor;

      quote.innerText = quoteText;
      author.innerText = authorText;
    });
}
