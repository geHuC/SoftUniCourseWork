import {html} from "./../../../node_modules/lit-html/lit-html.js"

export const detailsTemplate = ({
    img,
    make,
    model,
    year,
    description,
    price,
    material,
    isOwned,
    _id,
    deleteHandler

}) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="${img}" />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${make}</span></p>
        <p>Model: <span>${model}</span></p>
        <p>Year: <span>${year}</span></p>
        <p>Description: <span>${description}</span></p>
        <p>Price: <span>${price}</span></p>
        <p>Material: <span>${material}</span></p>
        ${isOwned ? buttonsTemplate(_id,deleteHandler) : ''}
    </div>
</div>`;

const buttonsTemplate = (id,deleteHandler) => html`
<div>
    <a href="/details/${id}/edit" class="btn btn-info">Edit</a>
    <a href="javascript:void(0)" @click=${deleteHandler} class="btn btn-red">Delete</a>
</div>`