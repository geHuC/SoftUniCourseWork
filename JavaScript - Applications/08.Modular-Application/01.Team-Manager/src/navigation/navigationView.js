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
    }
    _renderer(navigationTemplate(viewModel));
    next();
}

export default{
    getView,
    init,
}