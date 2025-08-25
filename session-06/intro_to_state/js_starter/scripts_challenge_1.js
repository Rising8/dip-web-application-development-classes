// Challenge - Stage 1
let addBook = function(book) { 
    // If there's no book to do, do nothing
    // databook
    if (!book || book.length < 1) return;

    // Get the list
    // Create a new list item
    let list = document.querySelector('#list');

    // template
    let listItem = document.createElement('li');

    // Append the item to the list
    listItem.textContent = book;

    // render
    list.appendChild(listItem);
}

// Creates a list
let book = ["Harry Potter IV", " hello2"];
// Individual items
let book1 = "Hello";
let book2 = "Hello 2";

addBook(book);
addBook(book1);
addBook(book2);