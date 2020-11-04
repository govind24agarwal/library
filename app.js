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
    bookDiv.setAttribute("data-index", i);
    let para = document.createElement("p");
    para.classList.add("book-info");
    para.setAttribute("data-index", i);
    let readButton = document.createElement("button");
    readButton.classList.add("read-button");
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.setAttribute("data-index", i);
    para.textContent = myLibrary[i].info();
    readButton.textContent = myLibrary[i].read;
    readButton.setAttribute("data-index", i);
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
const deleteButtons = document.querySelectorAll(".delete-button");
deleteButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let bookDiv = document.querySelector(
      `div[data-index="${e.target.getAttribute("data-index")}"]`
    );
    bookDisplay.removeChild(bookDiv);
  });
});
