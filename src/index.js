import Book from "./Book.js";
import User from "./User.js";
import Library from "./Library.js";

// create a new library instance
const library = new Library();

// Add some books
const book1 = new Book("Things Fall Apart", "Chinua Achebe", "ISBN-1234567809");
const book2 = new Book("Only In Nigeria", "Very Rev. Fr. Monsignor Nathaniel Ndiokwere", "ISBN-0987654321");
const book3 = new Book("Because I Am Involved", "Chukwuemeka Odumegwu Ojukwu", "ISBN-1357902468");
const book4 = new Book("Half Of A Yellow Sun", "Chimamanda Ngozi Adichie", "ISBN-0246813579");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3)
library.addBook(book4)

// Retrieve all the books added to the library
const allBooks = library.books;
console.log("All books", allBooks);

// Remove a book by it's ISBN
library.removeBook("ISBN-0246813579")

// Retrieve remaining books after last book removal
const bookRemains = library.books;
console.log("Remaining books", bookRemains);

// search for a book either by ISBN or name or author
console.log("Book searched by ISBN", library.searchBook("ISBN-1234567809"));
console.log("Book searched by name", library.searchBook("Only In Nigeria"));
console.log("Book searched by author", library.searchBook("Chukwuemeka Odumegwu Ojukwu"));