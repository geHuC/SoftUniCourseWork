import { loginTemplate } from "./loginTemplate.js";
import validator from "../../utils/validator.js";
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
        return;
    }
    let viewModel = {};
    viewModel.submitHandler = loginFormHandler;
    _renderer(loginTemplate(viewModel));
}
async function loginFormHandler(e){
    e.preventDefault();
    validator
    const formData = Object.fromEntries(new FormData(e.target));
    let errorMessages = [];
    if(!validator.isEmail(formData.email)) errorMessages.push('Enter a valid email adress.');
    if(!validator.isLongerOr(formData.password, 3)) errorMessages.push('Password must be at leaset 3 characters long.');
    if(errorMessages.length > 0){
        let viewModel = {};
        viewModel.submitHandler = loginFormHandler;
        viewModel.errorMessage = errorMessages
        _renderer(loginTemplate(viewModel));
        return;
    }
    try{
       await _authenticator.login(formData);
       _router('/my-team');
    }catch (e){
        let viewModel = {};
        viewModel.submitHandler = loginFormHandler;
        viewModel.errorMessage = [e.message];
        _renderer(loginTemplate(viewModel));
    }
}
export default{
    getView,
    init,
}