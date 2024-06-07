import Book from "./Book.js";
import User from "./User.js";

class Library {
  constructor() {
    this.books = [];
    this.users = [];
  }

  // Add a book to the library
  addBook(book) {
    this.books.push(book);
  }

  // Remove a book from the library by ISBN
  removeBook(isbn) {
    this.books = this.books.filter((book) => book.isbn !== isbn);
  }

  // Search for a book by title, author or ISBN
  searchBook(query) {
    return this.books.filter(
      (book) =>
        book.title.includes(query) ||
        book.author.includes(query) ||
        book.isbn.includes(query)
    );
  }
}

export default Library;