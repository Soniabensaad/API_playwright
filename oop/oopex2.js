class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  describe() {
    console.log(`This is a book. Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
  }
}

// Create a book object
const book1 = new Book("Jefferson", "John Smith", 2);

// Call the method
book1.describe(); // Output: This is a book. Title: Jefferson, Author: John Smith, Pages: 2

// You can access properties like this:
console.log(book1.title);  // Jefferson
console.log(book1.author); // John Smith
console.log(book1.pages);  // 2
