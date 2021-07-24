import { render, html } from "../node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";
// DOM elements
const allCats = document.querySelector('#allCats');

//Attach event listener
allCats.addEventListener('click',allCatsClickHanler); //event delagtion
//Templates
let catCardTemplate = ({
    id,
    statusCode,
    statusMessage,
    imageLocation}) => html`
<li>
    <img src="./images/${imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn" data-id="${id}">Show status code</button>
        <div class="status" style="display: none" id="100">
            <h4>Status Code: ${statusCode}</h4>
            <p>${statusMessage}</p>
        </div>
    </div>
</li>`;

let ulTemplate = cats => html`<ul> ${cats.map(x=>catCardTemplate(x))} </ul>`;

//Render the dom
render(ulTemplate(cats), allCats);

//Functions 
function allCatsClickHanler(e){
    if(!e.target.classList.contains('showBtn')){
        return; // if the element we clicked is not a button ignore
    }
    let status = e.target.nextElementSibling;
    if(status.style.display === 'none'){
        status.style.display = 'block';
        e.target.textContent = 'Hide status code';
    } else {
        status.style.display = 'none';
        e.target.textContent = 'Show status code';
    }
}