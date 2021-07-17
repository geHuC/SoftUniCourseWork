import isLogged from "./isLogged.js";
import changeHeader from "./changeHeader.js";
import showMovies from "./showMovies.js";

// Going to do it the stupidest way possible as I was away withot pc for 5 days and this is a huge project//
if(isLogged()) changeHeader.logged();
if(!isLogged()) changeHeader.notLogged();

showMovies();