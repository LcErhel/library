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

addBookToLibrary();
addBookToLibrary("namae", "jjr martin", "1654", true);

const display = document.querySelector(".display");

function refresh() {
    display.replaceChildren();
    myLibrary.forEach(book => {
        let newItem = document.createElement("div");
        newItem.classList.add("book");
        newItem.textContent = `${book.name}, ${book.author}, ${book.pages}, ${book.read} `;
    
        let deleteBtn = document.createElement("div");
        deleteBtn.classList.add("btn");
        deleteBtn.textContent = "delete";
        deleteBtn.addEventListener("click", () => {
            deleteBtn.parentElement.remove();
        });
        newItem.appendChild(deleteBtn);
    
        display.appendChild(newItem);
    });
}

const addNewBookBtn = document.querySelector(".addNewBookBtn")
addNewBookBtn.addEventListener("click", addNewBook);

function addNewBook(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked ? true : false;
    addBookToLibrary(name, author, pages, read);
    refresh();
}

refresh();