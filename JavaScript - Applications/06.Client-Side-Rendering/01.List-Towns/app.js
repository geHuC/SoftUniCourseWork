import { render, html } from "../node_modules/lit-html/lit-html.js";

const root = document.querySelector('#root');
const form = document.querySelector('form.content');
const towns = document.querySelector('#towns')

form.addEventListener('submit', onFormSubmit);
//apparently .map with lit-htm generate <!--> tags everytime 
const template = (cities) => html`<ul>
        ${cities.map(x => html`<li>${x}</li>`)}
    </ul>
`;

function onFormSubmit(e){
    e.preventDefault();
    render(template(towns.value.split(', ')),root);
    e.target.reset();
}