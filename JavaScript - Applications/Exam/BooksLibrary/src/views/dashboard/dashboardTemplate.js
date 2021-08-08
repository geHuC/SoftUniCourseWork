import {html, nothing} from "./../../../node_modules/lit-html/lit-html.js"

export const dashboardTemplate = (books) => html`        
    <!-- Dashboard Page ( for Guests and Users ) -->
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    ${books.length > 0 
    ? html`<ul class="other-books-list">${books.map(x=>singleTemplate(x))}   
    </ul>`
    : html`<p class="no-books">No books in database!</p>`}
</section>`;

const singleTemplate = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl}></p>
    <a class="button" href="/details/${book._id}">Details</a>
</li>
`;