import navigationView from "../navigation/navigationView.js";
import createView from "../views/create/createView.js";
import dashboardView from "../views/dashboard/dashboardView.js";
import detailsView from "../views/details/detailsView.js";
import editView from "../views/edit/editView.js";
import loginView from "../views/login/loginView.js";
import myBooksView from "../views/myBooks/myBooksView.js";
import registerView from "../views/register/registerView.js";

function attachTable(page){
    //initial redirects
    page('/index.html', '/dashboard'); //change view accordingly
    page('/', '/dashboard');

    //always load the nav
    page(navigationView.getView)
    //page view redirects
    page('/login', loginView.getView);
    page('/register', registerView.getView);
    page('/dashboard', dashboardView.getView);
    page('/create', createView.getView);
    page('/details/:id', detailsView.getView);
    page('/details/:id/edit', editView.getView);
    page('/my-books', myBooksView.getView);

    //page('/details/:id/edit', editView.getView); using id-s
}

export default {
    attachTable
}