
//IMPORT
import {html, nothing} from "./../../../node_modules/lit-html/lit-html.js"

export const detailsTemplate = (data) => html`
<!-- Listing Details Page -->
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src=${data.imageUrl}>
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${data.brand}</li>
            <li><span>Model:</span>${data.model}</li>
            <li><span>Year:</span>${data.year}</li>
            <li><span>Price:</span>${data.price}$</li>
        </ul>

        <p class="description-para">${data.description}</p>
        ${data.owned 
            ? buttonsTemplate(data._id,data.deleteHandler)
            : nothing }
    </div>
</section>
`;

const buttonsTemplate = (id, deleteHandler) => html`
<div class="listings-buttons">
    <a href="/details/${id}/edit" class="button-list">Edit</a>
    <a href="javascript:void(0)" class="button-list" @click=${deleteHandler}>Delete</a>
</div>`;