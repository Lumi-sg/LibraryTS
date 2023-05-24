import { myLibrary } from "../index";

export default function updateDisplay() {
	const container = document.querySelector(".bookContainer");
	if (container) {
		container.innerHTML = ""; // Clear the container before updating the display

		myLibrary.forEach((book) => {
			const bookElement = document.createElement("div");
			bookElement.classList.add("book");

			const titleElement = document.createElement("h2");
			titleElement.textContent = book.title;

			const authorElement = document.createElement("p");
			authorElement.textContent = "Author: " + book.author;

			const pagesElement = document.createElement("p");
			pagesElement.textContent = "Pages: " + book.pages;

			const readElement = document.createElement("p");
			readElement.textContent = "Read?: " + (book.hasRead ? "Yes" : "No");

			bookElement.appendChild(titleElement);
			bookElement.appendChild(authorElement);
			bookElement.appendChild(pagesElement);
			bookElement.appendChild(readElement);

			container.appendChild(bookElement);
		});
	}
}
