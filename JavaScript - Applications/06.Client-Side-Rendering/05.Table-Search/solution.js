import { render, html} from "../node_modules/lit-html/lit-html.js"
import { allRows } from "./template/tableTemplate.js";

//Dom selectors
const tableBody = document.querySelector('#tableBody');
const searchField = document.querySelector('#searchField');

//Event listteners
document.querySelector('#searchBtn').addEventListener('click', onClick);

//Closure objects
let serverData = []; // better idea to keep them in memory than to read the dom everytime

//Initiall Calls
init();


//Functions
function onClick() {
   let searchText = searchField.value.toLowerCase();
   let modfiedServerData = serverData.map(x => {
      if(Object.values(x).some(v => v.toLowerCase().includes(searchText))){
         let obj = {};
         obj.selected = 'select';
         return Object.assign(obj,x);
      } else {
         return Object.assign({}, x);
      }
   });
   render(allRows(modfiedServerData),tableBody);
   searchField.value = '';
}
async function init(){
   try{
       let res = await fetch(`http://localhost:3030/jsonstore/advanced/table`);
       let data = await res.json();
       serverData = Object.values(data)
       render(allRows(serverData),tableBody);
   } catch (e){
       console.error(e);
   }
}