import isLogged from "./isLogged.js";
import changeHeader from "./changeHeader.js";
import showAllMovies from "./showAllMovies.js";
import changeView from "./changeView.js";

// Going to do it the stupidest way possible as I was away withot pc for 5 days and this is a huge project//
//getting DOM items
const navbar = document.querySelector('.navbar');

//Adding event listeners
navbar.addEventListener('click', navbarClickHandler);

//checking if logged and changing the header accrodingly
if(isLogged()) changeHeader.logged();
if(!isLogged()) changeHeader.notLogged();

showAllMovies();

function navbarClickHandler(e){
    e.preventDefault(); // stopping link from refreshing
    console.log(e.target);
    changeView(e.target.dataset.view)
}