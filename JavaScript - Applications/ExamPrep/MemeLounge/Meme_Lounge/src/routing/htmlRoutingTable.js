import navigationView from "../navigation/navigationView.js";
import allView from "../views/all/allView.js";
import createView from "../views/create/createView.js";
import detailsView from "../views/details/detailsView.js";
import editView from "../views/edit/editView.js";
import homeView from "../views/home/homeView.js";
import loginView from "../views/login/loginView.js";
import profileView from "../views/profile/profileView.js";
import registerView from "../views/register/registerView.js";

function attachTable(page){
    //initial redirects
    page('/index.html', '/home'); //change view accordingly
    page('/', '/home');

    //always load the nav
    page(navigationView.getView)
    //page view redirects
    page('/login', loginView.getView);
    page('/register', registerView.getView);
    page('/home', homeView.getView);
    page('/create', createView.getView);
    page('/all', allView.getView);
    page('/details/:id', detailsView.getView);
    page('/details/:id/edit', editView.getView);
    page('/my-profile', profileView.getView);

    //page('/details/:id/edit', editView.getView); using id-s
}

export default {
    attachTable
}