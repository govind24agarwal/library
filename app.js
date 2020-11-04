const bookDisplay = document.querySelector(".book-display");

//list creation
let myLibrary = [];
myLibrary[0] = new Book("abc", "def", 23, false);
myLibrary[1] = new Book("abvvc", "defxx", 235, true);
myLibrary[2] = new Book("abcbb", "defjj", 234, true);
myLibrary[3] = new Book("abcnn", "defhh", 253, false);
myLibrary[4] = new Book("abcss", "defgg", 323, false);
myLibrary[5] = new Book("abcmm", "drref", 623, false);
displayBooks();

//functions
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    let doneReading = "not read yet";
    if (read) doneReading = "done reading";
    return `${title} by ${author}, ${pages} pages, ${doneReading}`;
  };
}
function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("single-book");
    let para = document.createElement("p");
    para.classList.add("book-info");
    let readButton = document.createElement("button");
    readButton.classList.add("read-button");
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    para.textContent = myLibrary[i].info();
    readButton.textContent = myLibrary[i].read;
    deleteButton.textContent = "delete";
    bookDisplay.appendChild(bookDiv);
    bookDiv.appendChild(para);
    bookDiv.appendChild(readButton);
    bookDiv.appendChild(deleteButton);
  }
}
function addBookToLibrary(title, author, pages, read) {
  const newBook = Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}
