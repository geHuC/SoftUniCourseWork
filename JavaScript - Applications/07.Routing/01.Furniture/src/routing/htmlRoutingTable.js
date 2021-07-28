import navigationView from "../navigation/navigationView.js";
import createView from "../views/create/createView.js";
import dashboardView from "../views/dashboard/dashboardView.js";
import detailsView from "../views/details/detailsView.js";
import editView from "../views/edit/editView.js";
import loginView from "../views/login/loginView.js";
import logoutView from "../views/logout/logoutView.js";
import myFurnitureView from "../views/myFurniture/myFurnitureView.js";
import registerView from "../views/register/registerView.js";

function attachTable(page){
    //initial redirects
    page('/index.html', '/dashboard');
    page('/', '/dashboard');

    //always load the nav
    page(navigationView.getView)
    //page view redirects
    page('/dashboard',dashboardView.getView);
    page('/login', loginView.getView);
    page('/register', registerView.getView);
    page('/logout', logoutView.getView);
    page('/create', createView.getView);
    page('/my', myFurnitureView.getView);
    page('/details/:id', detailsView.getView);
    page('/details/:id/edit', editView.getView);
}

export default {
    attachTable
}