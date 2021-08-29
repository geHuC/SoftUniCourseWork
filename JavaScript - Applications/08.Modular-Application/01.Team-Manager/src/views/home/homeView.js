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
    let viewModel = {
        isLogged : _authenticator.isLogged()
    }
    _renderer(homeTemplate(viewModel));
}

export default{
    getView,
    init,
}