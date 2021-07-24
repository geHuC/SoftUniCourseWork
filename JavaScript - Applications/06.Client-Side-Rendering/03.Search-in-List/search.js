import { render, html } from "../node_modules/lit-html/lit-html.js";
import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js"
import { towns } from "./towns.js";
//Dom Elements
const townsDiv = document.querySelector('#towns');
const searchBtn = document.querySelector('#searchBtn');

//Event Listeners
searchBtn.addEventListener('click', search);
//Templates
let townsTemplate = (towns) => html`<ul> ${towns.map(x => html`<li class=${ifDefined(x.class)}> ${x.name} </li>`)} </ul>`;

//Intial Loading
render(townsTemplate(towns.map(x => ({name:x}))),townsDiv);

//Functions 
function search() {
   const searchInput = document.querySelector('#searchText')
   const searchText = searchInput.value.toLowerCase();
   let matches = 0;
   let newTowns = towns.map(x => {
      if(x.toLowerCase().includes(searchText)){
         matches++; // this is stupid
         return {name:x, class:'active'};
      } else {
         return {name:x}
      }
   });
   searchInput.value = ''; //zeroing the search input for better UX
   document.querySelector('#result').textContent = `${matches} matches found`; // adding the matches to the dom don't think i need a new template just for text
   render(townsTemplate(newTowns),townsDiv)   
}
