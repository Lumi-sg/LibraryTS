import "./styles.css";
import addBook from "./modules/addBook";
import addBookModal from "./modules/addBookModal";
import updateDisplay from "./modules/updateDisplay";
export var myLibrary = [];
var defaultBooks = [
	["The Hobbit", "J.R.R. Tolkien", 295, true],
	["A Game of Thrones", "George R.R. Martin", 694, true],
	["Mistborn: The Final Empire", "Brandon Sanderson", 541, true],
	["The Eye of the World", "Robert Jordan", 782, false],
	["The Name of the Wind", "Patrick Rothfuss", 662, false],
];
defaultBooks.forEach(function (book) {
	return addBook.apply(void 0, book);
});
addBookModal();
updateDisplay();
