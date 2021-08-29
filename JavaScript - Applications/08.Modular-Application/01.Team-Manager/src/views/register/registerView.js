import { registerTemplate } from "./registerTemplate.js";
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
       await _router('/teams');
       return;
    }
    let viewModel = {};
    viewModel.submitHandler = registerFormHandler;
    _renderer(registerTemplate(viewModel));
}
async function registerFormHandler(e){
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    let errorMessages = [];
    if(!validator.isEmail(formData.email)) errorMessages.push('Enter a valid email adress.');
    if(!validator.isLongerOr(formData.username, 3)) errorMessages.push('Username must be atleaset 3 characters long.');
    if(!validator.isLongerOr(formData.password, 3)) errorMessages.push('Password must be at leaset 3 characters long.');
    if(!validator.isEql(formData.password,formData.repass)) errorMessages.push('Passwords do not match.');
    if(errorMessages.length > 0){
        let viewModel = {};
        viewModel.submitHandler = registerFormHandler;
        viewModel.errorMessage = errorMessages
        _renderer(registerTemplate(viewModel));
        return;
    }
    try{
       await _authenticator.register(formData);
       _router('/my-team');
    }catch (e){
        let viewModel = {};
        viewModel.submitHandler = registerFormHandler;
        viewModel.errorMessage = [e.message];
        _renderer(registerTemplate(viewModel));
    }

}
export default{
    getView,
    init,
}