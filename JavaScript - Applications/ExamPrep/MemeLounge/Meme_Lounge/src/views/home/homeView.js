import { homeTemplate } from "./homeTemplate.js";


//Dependencies
let _router = undefined;
let _renderer = undefined;
let _authenticator = undefined

function init(router, renderer, authService){ //Dependency injection
    _router = router;
    _renderer =renderer;
    _authenticator = authService;
}

async function getView(){
    if(_authenticator.isLogged()){
        _router('/all');
        return;
    }
    _renderer(homeTemplate());
}

export default{
    getView,
    init,
}