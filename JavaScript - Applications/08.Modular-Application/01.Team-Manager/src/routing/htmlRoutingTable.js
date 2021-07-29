import navigationView from "../navigation/navigationView.js";
import homeView from "../views/home/homeView.js";

function attachTable(page){
    //initial redirects
    page('/index.html', '/home');
    page('/', '/home');

    //always load the nav
    page(navigationView.getView)
    // //page view redirects

    page('/home',homeView.getView);
    // page('/login', loginView.getView);
    // page('/register', registerView.getView);
    // page('/logout', logoutView.getView);
    // page('/create', createView.getView);
    // page('/my', myFurnitureView.getView);
    // page('/details/:id', detailsView.getView);
    // page('/details/:id/edit', editView.getView);
}

export default {
    attachTable
}