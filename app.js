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
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}
function removeBooksFromDisplay() {
  bookDisplay.innerHTML = "";
}
//event listeners
const deleteButtons = document.querySelectorAll(".delete-button");
deleteButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let bookDiv = document.querySelector(
      `div[data-index="${e.target.getAttribute("data-index")}"]`
    );
    bookDisplay.removeChild(bookDiv);
  });
});

const readButtons = document.querySelectorAll(".read-button");
readButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (myLibrary[e.target.getAttribute("data-index")].read) {
      myLibrary[e.target.getAttribute("data-index")].read = false;
      e.target.textContent = "false";
    } else {
      myLibrary[e.target.getAttribute("data-index")].read = true;
      e.target.textContent = "true";
    }
  });
});

const form = document.querySelector(".form");
const addBookBtn = document.querySelector("#new-book");
addBookBtn.addEventListener("click", (e) => {
  form.classList.add("open");
});
form.addEventListener("click", (e) => {
  if (e.target.classList.contains("form")) {
    form.classList.remove("open");
  }
});

const submitBtn = document.querySelector("input[id='submit'");
submitBtn.addEventListener("click", (e) => {
  let bname = document.querySelector("input[id='bname']");
  let bauthor = document.querySelector("input[id='bauthor']");
  let bpage = document.querySelector("input[id='bpage']");
  let bread = document.querySelector("input[id='bread' ]");
  let name = bname.value;
  let author = bauthor.value;
  let page = bpage.value;
  let read = false;
  if (bread.value == "yes") read = true;
  addBookToLibrary(name, author, page, read);
  removeBooksFromDisplay();
  displayBooks();
});
