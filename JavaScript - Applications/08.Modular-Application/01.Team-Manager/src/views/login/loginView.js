import { loginTemplate } from "./loginTemplate.js";

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
    if(_authenticator.isLogged()){ // if user is already loogged don't show that page
        _router('/teams');
    }
    let viewModel = {};
    viewModel.submitHandler = loginFormHandler;
    _renderer(loginTemplate(viewModel));
}
async function loginFormHandler(e){
    e.preventDefault();
    console.log('clicked');
}
export default{
    getView,
    init,
}