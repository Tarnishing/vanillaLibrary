const myLibrary = []

const library = document.querySelector(".library")

function Book(authName, bookName, genre, pages, readStatus) {
  this.authName = authName
  this.bookName = bookName
  this.genre = genre
  this.pages = pages
  this.readStatus = readStatus
}
const authNameInput = document.querySelector(".authName")
const submit = document.querySelector(".submit")
const bookNameInput = document.querySelector(".bookName")
const genreInput = document.querySelector(".genre")
const pagesInput = document.querySelector(".pageNum")
const readStatusInput = document.querySelector("#readStatus")
function addBookToLibrary() {
  event.preventDefault()

  const authName = authNameInput.value
  const bookName = bookNameInput.value
  const genre = genreInput.value
  const pages = pagesInput.value
  const readStatus = readStatusInput.value

  const newBook = new Book(authName, bookName, genre, pages, readStatus)

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
    <p>Read Status: ${book.readStatus ? "Read" : "Unread"} </p>
    <button class ="remove-button" data-index="${index}">Remove</button>
    <button class ="toggle-read-status-button" data-index="${index}" onclick="toggleReadStatus(${index})">Toggle Read Status</button>
  `
    library.appendChild(bookCard)
  })

  remove()
  toggleReadStatus()
}

function remove() {
  const removeButton = document.querySelectorAll(".remove-button")

  removeButton.forEach((button) => {
    const index = parseInt(button.getAttribute("data-index"))
    button.addEventListener("click", () => removeBook(index))
  })
}

function toggleReadStatus(index) {
  myLibrary[index].readStatus = !myLibrary[index].readStatus
  displayLibrary()
}

function removeBook(index) {
  myLibrary.splice(index, 1)
  displayLibrary()
}

submit.addEventListener("click", addBookToLibrary)
