
//IMPORT
import {html, nothing} from "./../../../node_modules/lit-html/lit-html.js"

export const allTemplate = (data) => html`<!-- All Listings Page -->
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">
        ${data.length > 0 
        ? data.map(x => singleTemplate(x))
        : html`
        <!-- Display if there are no records -->
        <p class="no-cars">No cars in database.</p>`}
    </div>
</section>
`;

const singleTemplate = (data) => html`
<div class="listing">
    <div class="preview">
        <img src=${data.imageUrl}>
    </div>
    <h2>${data.brand} ${data.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${data.year}</h3>
            <h3>Price: ${data.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/details/${data._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>`;