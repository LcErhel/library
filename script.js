"use strict";

const myLibrary = [];

function Book(name, author, pages, read) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let newBook = createBook();
    myLibrary.push(newBook);
    console.log(newBook);
}

function createBook() {
    let name = prompt("Book name");
    let author = prompt("Author");
    let pages = prompt("Amount of pages");
    let read = false;
    return new Book(name, author, pages, read);
}