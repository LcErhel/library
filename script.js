"use strict";

const myLibrary = [];

function Book(name, author, pages, read) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name = "name", author = "author", pages = 50, read = false) {
    let newBook = new Book(name, author, pages, read);
    return myLibrary.push(newBook);
}