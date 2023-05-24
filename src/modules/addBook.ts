import Book from "./Book";
import { myLibrary } from "../index";
import updateDisplay from "./updateDisplay";

export default function addBook(title: string, author: string, pages: number, hasRead: boolean) {
	const book = new Book(title, author, pages, hasRead);
	myLibrary.push(book);
	updateDisplay();
}
