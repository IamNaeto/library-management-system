# Library Management System

This project is a simple library management system implemented in JavaScript using ES6 classes and features. It allows users to manage books, users, and their borrowed books.

## Requirements

1. **Book Management**
    - Add a book
    - Remove a book
    - Search for a book by title, author, or ISBN

2. **User Management**
    - Add a user
    - Remove a user
    - Search for a user by name or ID

3. **Borrowing System**
    - Allow a user to borrow a book
    - Allow a user to return a book
    - Check if a book is available

## Instructions

### 1. Setup the Project
   - Create the following files:
   - `Book.js`
   - `User.js`
   - `Library.js`
   - `index.js`

### 2. Create Classes
   - **Book Class**: Represents a book with properties such as title, author, isbn, and isAvailable.
   - **User Class**: Represents a user with properties such as name, id, and borrowedBooks (an array to store borrowed books).
   - **Library Class**: Manages the books and users with methods to add, remove, search for books and users, as well as to borrow and return books.

### 3. Implement Methods
   - **Library Class Methods**:
       - `addBook(book)`
       - `removeBook(isbn)`
       - `searchBook(query)`
       - `addUser(user)`
       - `removeUser(id)`
       - `searchUser(query)`
       - `borrowBook(userId, isbn)`
       - `returnBook(userId, isbn)`
       - `isBookAvailable(isbn)`

### 4. Use ES6 Features
   - Use ES6 classes for creating `Book`, `User`, and `Library` classes.
   - Utilize ES6 features such as template literals, destructuring, and spread/rest operators where appropriate.
   - Use ES6 modules to split the classes into separate files and import them as needed.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/IamNaeto/library-management-system.git
    ```

2. Navigate to the project directory:

    ```bash
    cd library-management-system\src
    ```

3. Run the application:

    ```bash
    node index.js
    ```
