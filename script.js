const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

bookForm.addEventListener('submit', addBookToLibrary);

// Load saved books from local storage and render them on the page
window.addEventListener('load', () => {
  const savedBooks = JSON.parse(localStorage.getItem('books')) || [];
  savedBooks.forEach(book => renderBook(book));
});

function addBookToLibrary(event) {
  event.preventDefault();

  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').value;

  const book = {
    title: title,
    author: author,
    pages: pages,
    read: read
  };

  // Render the book on the page
  renderBook(book);

  // Save the book to local storage
  saveBookToLocalStorage(book);

  bookForm.reset();
}

function renderBook(book) {
  const bookElement = document.createElement('div');
  bookElement.classList.add('book');
  bookElement.innerHTML = `
    <h2>${book.title}</h2>
    <p>by ${book.author}</p>
    <p>${book.pages} pages</p>
    <p>${book.read === 'yes' ? 'Read' : 'Not read'}</p>
  `;
  bookList.appendChild(bookElement);
}

function saveBookToLocalStorage(book) {
  let books = JSON.parse(localStorage.getItem('books')) || [];

  books.push(book);

  localStorage.setItem('books', JSON.stringify(books));
}