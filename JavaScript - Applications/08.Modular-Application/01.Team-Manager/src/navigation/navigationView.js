import { navigationTemplate } from "./navigationTemplate.js";

//Dependencies
let _router = undefined;
let _renderer = undefined;
let _authenticator = undefined;

function init(router, renderer, authService){ //Dependency injection
    _router = router;
    _renderer =renderer;
    _authenticator = authService;
}

async function getView(ctx, next){
    let viewModel = {
        logged: _authenticator.isLogged(),
        logoutHandler: logoutHandler
    }
    _renderer(navigationTemplate(viewModel));
    next();
}
async function logoutHandler(e){
    try{
       await _authenticator.logout();
    } catch (e){
        console.log('something went wrong');
    }
    _router('/home');
}
export default{
    getView,
    init,
}