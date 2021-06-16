const btnIsbn = document.querySelector(".icone");
const key = "AIzaSyAbrR1prX3n0OLB1HKS2TvwpB6hnwUljNM";

const lblIsbn = document.querySelector("#isbn");
const lblTitulo = document.querySelector("#titulo");
const lblAutor = document.querySelector("#autor");
const lblCategoria = document.querySelector("#categoria");
const lblEdicao = document.querySelector("#edicao");
const lblEditora = document.querySelector("#editora");
const lblIdioma = document.querySelector("#idioma");

btnIsbn.addEventListener("click", () => {
   const isbnCode = lblIsbn.value;
   fetch(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnCode}&key=${key}`
   )
      .then((response) => response.json())
      .then((ISBN) => {
         lblTitulo.value = ISBN.items[0].volumeInfo.title;
         lblAutor.value = ISBN.items[0].volumeInfo.authors;
         lblCategoria.value = ISBN.items[0].volumeInfo.categories;
         lblEdicao.value = ISBN.items[0].volumeInfo.publishedDate;
         lblEditora.value = ISBN.items[0].volumeInfo.publisher;
         lblIdioma.value = ISBN.items[0].volumeInfo.language;
         console.log(ISBN.items[0].volumeInfo);
      });
});

/* const fetchISBN = () => {
   const url =
      "https://www.googleapis.com/books/v1/volumes?q=isbn:9788535206234&key=AIzaSyAbrR1prX3n0OLB1HKS2TvwpB6hnwUljNM";
   fetch(url)
      .then((response) => response.json())
      .then((ISBN) => {
         console.log(ISBN.items[0].volumeInfo.title);
      });
};

fetchISBN(); */
