import isLogged from "./isLogged.js";
import changeHeader from "./changeHeader.js";
import showAllMovies from "./showAllMovies.js";
import changeView from "./changeView.js";
import register from "./register.js";
import login from "./login.js";
import showSingleMovie from "./showSingleMovie.js";
import addMovie from "./addMovie.js";

// Going to do it the stupidest way possible as I was away withot pc for 5 days and this is a huge project//
//getting DOM items
const navbar = document.querySelector('.navbar');
const registerForm = document.querySelector('#form-sign-up');
const loginForm = document.querySelector('#form-login');
const addMovieForm = document.querySelector('.add-movie-form');
const editMovieForm = document.querySelector('.edit-movie-form');
const moviesContainer = document.querySelector('#movie');
const addMovieBtnSection = document.querySelector('#add-movie-button');

//Adding event listeners
navbar.addEventListener('click', navbarClickHandler);
registerForm.addEventListener('submit', register);
loginForm.addEventListener('submit', login);
//gonna reuse some code will delegate the addmMovie function to add and update
addMovieForm.addEventListener('submit',addMovie);
editMovieForm.addEventListener('submit',addMovie);
moviesContainer.addEventListener('click', movieClickHandler);
addMovieBtnSection.addEventListener('click',addMovieBtnHandler)

//checking if logged and changing the header accrodingly
if(isLogged()) changeHeader.logged();
if(!isLogged()) changeHeader.notLogged();

showAllMovies();
function movieClickHandler(e){
    e.preventDefault(); // stopping link from refreshing
    if(e.target.type !== 'button'){
        console.log('notbutton');
        return;
    }
    showSingleMovie(e.target.dataset.movieId);
    changeView('single');
}
function navbarClickHandler(e){
    e.preventDefault(); // stopping link from refreshing
    changeView(e.target.dataset.view)
}
function addMovieBtnHandler(e){
    e.preventDefault();
    changeView('addMovie');
}