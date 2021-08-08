import { HtmlRenderer } from "./renderer/htmlRenderer.js";
import page from "./../node_modules/page/page.mjs";
import htmlRouter from "./routing/htmlRouter.js"   
import authService from "./services/authService.js";
import navigationView from "./navigation/navigationView.js";
import loginView from "./views/login/loginView.js";
import registerView from "./views/register/registerView.js";
import createView from "./views/create/createView.js";
import fetcherService from "./services/fetcherService.js";
import detailsView from "./views/details/detailsView.js";
import editView from "./views/edit/editView.js";
import dashboardView from "./views/dashboard/dashboardView.js";
import myBooksView from "./views/myBooks/myBooksView.js";

//Get Dom Elements
const rootElement = document.querySelector('#site-content');
const navigationElement = document.querySelector('#site-header');

//Get html render
const htmlRenderer = new HtmlRenderer();

//Attach view renderers
const viewRenderHandler = htmlRenderer.createRenderHandler(rootElement);
const navigationRenderHandler =  htmlRenderer.createRenderHandler(navigationElement);


//initialize all pages - Would be so much nicer if JS had reflection support
navigationView.init( page, navigationRenderHandler, authService);
loginView.init(page, viewRenderHandler, authService);
registerView.init(page, viewRenderHandler, authService);
createView.init(page, viewRenderHandler, authService, fetcherService);
detailsView.init(page, viewRenderHandler, authService, fetcherService);
editView.init(page, viewRenderHandler, authService, fetcherService);
dashboardView.init(page, viewRenderHandler, authService, fetcherService);
myBooksView.init(page, viewRenderHandler, authService, fetcherService);


//initialize the router the router
htmlRouter.init(page);