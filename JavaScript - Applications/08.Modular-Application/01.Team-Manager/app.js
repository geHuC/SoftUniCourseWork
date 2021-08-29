import { HtmlRenderer } from "./src/renderer/htmlRenderer.js";
import page from "./node_modules/page/page.mjs"   
import htmlRouter from "./src/routing/htmlRouter.js";
import navigationView from "./src/navigation/navigationView.js";
import authService from "./src/services/authService.js";
import homeView from "./src/views/home/homeView.js";
import loginView from "./src/views/login/loginView.js";
import registerView from "./src/views/register/registerView.js";
import teamsView from "./src/views/teams/teamsView.js";
import createView from "./src/views/create/createView.js";

//Get Dom Elements
const rootElement = document.querySelector('#root');
const navigationElement = document.querySelector('#titlebar');
const authentication = authService;

//Get html render
const htmlRenderer = new HtmlRenderer();

const viewRenderHandler = htmlRenderer.createRenderHandler(rootElement);
const navigationRenderHandler =  htmlRenderer.createRenderHandler(navigationElement);

//initialize all pages - Would be so much nicer if JS had reflection support
navigationView.init( page, navigationRenderHandler, authentication);
homeView.init( page, viewRenderHandler, authentication);
loginView.init( page, viewRenderHandler, authentication);
registerView.init( page, viewRenderHandler, authentication);
teamsView.init( page, viewRenderHandler, authentication);
createView.init( page, viewRenderHandler, authentication);
//loginView.init( page, viewRenderHandler, authentication);


//initialize the router the router
htmlRouter.init(page);