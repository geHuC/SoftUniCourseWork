
//IMPORT
import {html, nothing} from "./../../../node_modules/lit-html/lit-html.js"

export const detailsTemplate = (data) => html`
<!-- Details Meme Page (for guests and logged users) -->
<section id="meme-details">
    <h1>Meme Title: ${data.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${data.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${data.description}</p>
            ${data.owned 
            ? buttonsTemplate(data._id,data.deleteHandler)
            : nothing }
        </div>
    </div>
</section>
`;

const buttonsTemplate = (id, deleteHandler) => html`
<!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
<a class="button warning" href="/details/${id}/edit">Edit</a>
<button @click=${deleteHandler} class="button danger">Delete</button>`;