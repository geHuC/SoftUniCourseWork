//IMPORT
import {html, nothing} from "./../../../node_modules/lit-html/lit-html.js"

export const myBooksTemplate = (data) => html`
<!-- My Books Page ( Only for logged-in users ) -->
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
        ${data.length > 0 
        ? html`<ul class="my-books-list"> ${data.map(x => singleTemplate(x))} </ul>`
        : html`
        <!-- Display paragraph: If the user doesn't have his own books  -->
        <p class="no-books">No books in database!</p>`}
</section>
`;

const singleTemplate = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl}></p>
    <a class="button" href="/details/${book._id}">Details</a>
</li>
`;