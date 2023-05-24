import Book from "./Book";
import { myLibrary } from "../index";
import updateDisplay from "./updateDisplay";
export default function addBook(title, author, pages, hasRead) {
    var book = new Book(title, author, pages, hasRead);
    myLibrary.push(book);
    updateDisplay();
}
