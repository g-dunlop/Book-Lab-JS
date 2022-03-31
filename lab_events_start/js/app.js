document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#delete');
  button.addEventListener('click', handleButtonClick);
})

const handleFormSubmit = function(event){
  event.preventDefault();
  const newBook = document.createElement('ul');
  newBook.id = 'item';

  const title = document.createElement('li');
  const author = document.createElement('li');
  const category = document.createElement('li');
  title.id = 'book-title';
  author.id = 'book-author';
  category.id = 'book-category';
  newBook.appendChild(title);
  newBook.appendChild(author);
  newBook.appendChild(category);
  title.textContent = `Title: ${event.target.title.value}` ;
  author.textContent = `Author: ${event.target.author.value}`;
  category.textContent = `Category: ${event.target.category.value}`;

  const list = document.querySelector('#reading-list');
  list.appendChild(newBook)
  document.querySelector('#new-item-form').reset();
}

const handleButtonClick = function(event){
  const deletedBooks = document.querySelectorAll('#item');
  const deletedArray = Array.from(deletedBooks);
  deletedArray.forEach((book) => {
    book.remove();
})
}