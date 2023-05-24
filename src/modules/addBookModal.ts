import addBook from "./addBook";
export default function addBookModal() {
	const addBookBtn = document.getElementById("addBookBtn");
	const modal = document.getElementById("modal");
	const overlay = document.getElementById("overlay");
	const closeBtn = document.querySelector(".close");
	const addBookForm = document.getElementById("addBookForm");
	const inputs = document.querySelectorAll("input");

	addBookBtn.addEventListener("click", () => {
		modal.style.display = "block";
		overlay.style.display = "block";
	});

	closeBtn.addEventListener("click", () => {
		modal.style.display = "none";
		overlay.style.display = "none";
	});

	overlay.addEventListener("click", () => {
		modal.style.display = "none";
		overlay.style.display = "none";
	});

	addBookForm?.addEventListener("submit", (e) => {
		e.preventDefault();
		const titleInput = document.getElementById("title") as HTMLInputElement;
		const authorInput = document.getElementById("author") as HTMLInputElement;
		const pagesInput = document.getElementById("pages") as HTMLInputElement;
		const availableInput = document.getElementById("available") as HTMLInputElement;

		const title = titleInput.value;
		const author = authorInput.value;
		const pages = parseInt(pagesInput.value);
		const available = availableInput.checked;

		if (validateForm(title, author, pages)) {
			addBook(title, author, pages, available);
			modal.style.display = "none";
			overlay.style.display = "none";
			inputs.forEach((input) => (input.value = ""));
		}
	});

	function validateForm(title: string, author: string, pages: number): boolean {
		if (title.trim() === "" || author.trim() === "" || isNaN(pages) || pages <= 0) {
			alert("Please provide valid information.");
			return false;
		}
		return true;
	}
}
