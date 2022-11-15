const getQuoteBtn = document.querySelector("#get-quote");
const dynamicQuote = document.querySelector("#dyn-quote");
const author = document.querySelector("#author");

getQuoteBtn.addEventListener("click", loaddata);

function loaddata() {
  dynamicQuote.innerText = "";
  author.innerText = "";
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => {
      console.log("ok");
      return response.json();
    })

    .then((data) => {
      let quoteText = data.data[0].quoteText;
      let authorOne = data.data[0].quoteAuthor;

      let quote = document.createTextNode(quoteText);

      dynamicQuote.append(quote);
      author.append("-" + authorOne);
    });
}
