import { myLibrary } from "../index";
export default function updateDisplay() {
    var container = document.querySelector(".bookContainer");
    if (container) {
        container.innerHTML = ""; // Clear the container before updating the display
        myLibrary.forEach(function (book) {
            var bookElement = document.createElement("div");
            bookElement.classList.add("book");
            var titleElement = document.createElement("h2");
            titleElement.textContent = book.title;
            var authorElement = document.createElement("p");
            authorElement.textContent = "Author: " + book.author;
            var pagesElement = document.createElement("p");
            pagesElement.textContent = "Pages: " + book.pages;
            var readElement = document.createElement("p");
            readElement.textContent = "Read?: " + (book.hasRead ? "Yes" : "No");
            bookElement.appendChild(titleElement);
            bookElement.appendChild(authorElement);
            bookElement.appendChild(pagesElement);
            bookElement.appendChild(readElement);
            container.appendChild(bookElement);
        });
    }
}
