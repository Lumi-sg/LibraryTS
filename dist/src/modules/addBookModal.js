import addBook from "./addBook";
export default function addBookModal() {
    var addBookBtn = document.getElementById("addBookBtn");
    var modal = document.getElementById("modal");
    var overlay = document.getElementById("overlay");
    var closeBtn = document.querySelector(".close");
    var addBookForm = document.getElementById("addBookForm");
    var inputs = document.querySelectorAll("input");
    addBookBtn.addEventListener("click", function () {
        modal.style.display = "block";
        overlay.style.display = "block";
    });
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        overlay.style.display = "none";
    });
    overlay.addEventListener("click", function () {
        modal.style.display = "none";
        overlay.style.display = "none";
    });
    addBookForm === null || addBookForm === void 0 ? void 0 : addBookForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var titleInput = document.getElementById("title");
        var authorInput = document.getElementById("author");
        var pagesInput = document.getElementById("pages");
        var availableInput = document.getElementById("available");
        var title = titleInput.value;
        var author = authorInput.value;
        var pages = parseInt(pagesInput.value);
        var available = availableInput.checked;
        if (validateForm(title, author, pages)) {
            addBook(title, author, pages, available);
            modal.style.display = "none";
            overlay.style.display = "none";
            inputs.forEach(function (input) { return (input.value = ""); });
        }
    });
    function validateForm(title, author, pages) {
        if (title.trim() === "" || author.trim() === "" || isNaN(pages) || pages <= 0) {
            alert("Please provide valid information.");
            return false;
        }
        return true;
    }
}
