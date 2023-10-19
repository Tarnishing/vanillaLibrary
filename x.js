const myLibrary = []

const library = document.querySelector(".library")

function Book(authName, bookName, genre, pages) {
  this.authName = authName
  this.bookName = bookName
  this.genre = genre
  this.pages = pages
}
const authNameInput = document.querySelector(".authName")
const submit = document.querySelector(".submit")
const bookNameInput = document.querySelector(".bookName")
const genreInput = document.querySelector(".genre")
const pagesInput = document.querySelector(".pageNum")

function addBookToLibrary() {
  event.preventDefault()

  const authName = authNameInput.value
  const bookName = bookNameInput.value
  const genre = genreInput.value
  const pages = pagesInput.value

  const newBook = new Book(authName, bookName, genre, pages)

  myLibrary.push(newBook)

  authNameInput.value = ""
  bookNameInput.value = ""
  genreInput.value = ""
  authNameInput.value = ""
  displayLibrary()
}

function displayLibrary() {
  library.innerHTML = ""

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div")
    bookCard.className = "book-card"
    bookCard.innerHTML = `
    <p>Author: ${book.authName}</p>
    <p>Title: ${book.bookName}</p>
    <p>Genre: ${book.genre}</p>
    <p>Pages: ${book.pages}</p>
    <button class ="remove-button" data-index="${index}">Remove</button>
  `
    library.appendChild(bookCard)
  })

  remove()
}

function remove() {
  const removeButton = document.querySelectorAll(".remove-button")

  removeButton.forEach((button) => {
    const index = parseInt(button.getAttribute("data-index"))
    button.addEventListener("click", () => removeBook(index))
  })
}

function removeBook(index) {
  myLibrary.splice(index, 1)
  displayLibrary()
}

submit.addEventListener("click", addBookToLibrary)
