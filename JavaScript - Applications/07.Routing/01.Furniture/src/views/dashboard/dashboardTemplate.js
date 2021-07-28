import {html} from "./../../../node_modules/lit-html/lit-html.js"

const singleCard = ({
    img,
    description,
    price,
    _id
}) => html`
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src="${img}" />
            <p> ${description} </p>
            <footer>
                <p>Price: <span>${price} $</span></p>
            </footer>
            <div>
                <a href=details/${_id} class="btn btn-info">Details</a>
            </div>
        </div>
    </div>
</div>`;

export const dashboardTemplate = (allModels,text) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>${text.title}</h1>
        <p>${text.subTitle}</p>
    </div>
</div>
<div class="row space-top">
    ${ifEmpty(allModels)}
</div>`;

function ifEmpty(allModels){
    if(allModels.length === 0){
        return html`<h2>There is nothing to show yet!</h2>`;
    }
    return allModels.map(x => singleCard(x));
}