
//IMPORT
import {html, nothing} from "./../../../node_modules/lit-html/lit-html.js"

export const detailsTemplate = (data) => html`
<!-- Details Page ( for Guests and Users ) -->
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${data.title}</h3>
        <p class="type">Type: ${data.type}</p>
        <p class="img"><img src=${data.imageUrl}></p>
        <div class="actions">
            ${data.owned
            ? userButtons(data._id, data.deleteHandler)
            : ifLiked(data) }
            
            
            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${data.likes}</span>
            </div>
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${data.description}</p>
    </div>
</section>`;

const ifLiked = (data) =>{
    if(!data.owned && !data.hasLiked && data.logged){
    return html`<a class="button" href="javascript:void(0)" @click=${data.likeHandler}>Like</a>`;
}
}
const userButtons = (id, deleteHandler) => html`
<!-- Edit/Delete buttons ( Only for creator of this book )  -->
<a class="button" href="/details/${id}/edit">Edit</a>
<a class="button" href="javascript:void(0)" @click=${deleteHandler}>Delete</a>`;