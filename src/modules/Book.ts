export default class Book {
	title: string;
	author: string;
	pages: number;
	hasRead: boolean;
	constructor(title: string, author: string, pages: number, hasRead: boolean) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.hasRead = hasRead;
	}
}
