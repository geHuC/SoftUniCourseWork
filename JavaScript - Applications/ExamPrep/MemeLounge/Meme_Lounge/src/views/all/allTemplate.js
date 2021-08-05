
//IMPORT
import {html, nothing} from "./../../../node_modules/lit-html/lit-html.js"

export const allTemplate = (data) => html`<!-- All Memes Page ( for Guests and Users )-->
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
        ${data.length > 0 
            ?
            data.map(x => singleTemplate(x))
            :
            html`<p class="no-memes">No memes in database.</p>`}
    </div>
</section>
`;

const singleTemplate = (data) => html`
<div class="meme">
<div class="card">
    <div class="info">
        <p class="meme-title">${data.title}</p>
        <img class="meme-image" alt="meme-img" src=${data.imageUrl}>
    </div>
    <div id="data-buttons">
        <a class="button" href="/details/${data._id}">Details</a>
    </div>
</div>
</div>`;