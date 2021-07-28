import { HtmlRenderer } from "./src/renderer/htmlRenderer.js";
import page from "./node_modules/page/page.mjs"   
import htmlRouter from "./src/routing/htmlRouter.js";
import dashboardView from "./src/views/dashboard/dashboardView.js";
import navigationView from "./src/navigation/navigationView.js";
import loginView from "./src/views/login/loginView.js";
import registerView from "./src/views/register/registerView.js";
import createView from "./src/views/create/createView.js";
import authService from "./src/services/authService.js";
import detailsView from "./src/views/details/detailsView.js";
import editView from "./src/views/edit/editView.js";
import myFurnitureView from "./src/views/myFurniture/myFurnitureView.js";
import logoutView from "./src/views/logout/logoutView.js";

//Get Dom Elements
const rootElement = document.querySelector('#root');
const navigationElement = document.querySelector('#navigation');
const authentication = authService;

//Get html render
const htmlRenderer = new HtmlRenderer();

const viewRenderHandler = htmlRenderer.createRenderHandler(rootElement);
const navigationRenderHandler =  htmlRenderer.createRenderHandler(navigationElement);

//initialize all pages - Would be so much nicer if JS had reflection support
navigationView.init( page, navigationRenderHandler, authentication);
loginView.init( page, viewRenderHandler, authentication);
registerView.init( page, viewRenderHandler, authentication);
logoutView.init( page, viewRenderHandler, authentication);
detailsView.init( page, viewRenderHandler, authentication);
myFurnitureView.init( page, viewRenderHandler, authentication);
editView.init( page, viewRenderHandler);
dashboardView.init( page, viewRenderHandler);
createView.init( page, viewRenderHandler);

//initialize the router the router
htmlRouter.init(page);