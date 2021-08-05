import { displayNotification } from "../../utils/errorNotification.js";
import errorStyling from "../../utils/errorStyling.js";
import { registerTemplate } from "./registerTemplate.js";

//Dependencies
let _router = undefined;
let _renderer = undefined;
let _authenticator = undefined;


function init(router, renderer, authService){ //Dependency injection
    _router = router;
    _renderer =renderer;
    _authenticator = authService;
}

async function getView(){
    if(_authenticator.isLogged()){
        await _router('/all');
    } else {
        _renderer(registerTemplate(formSubmitHandler));
    }
}

async function formSubmitHandler(e){
    e.preventDefault();
    const formInput = Object.fromEntries(new FormData(e.target));
    let errors = [];
    Object.keys(formInput).forEach(x =>{
        if(formInput[x].trim() === ''){
            errors.push(x);
        }
    });
    if(errors.length > 0){
        let message = `${errors.map(x => x = x[0].toUpperCase() + x.slice(1)).join(', ')} cannot be empty`;
        displayNotification(message);
        return;
    }
    if(formInput.password !== formInput.repeatPass){
        displayNotification('Entered passwords do not match');
        return;
    }
    let registrationDetails = {
        email: formInput.email,
        password: formInput.password,
        username: formInput.username,
        gender: formInput.gender
    };
    try{
        await _authenticator.register(registrationDetails);
        _router.redirect('/all');
    } catch (e){
        displayNotification(e.message);
    }
}

export default{
    getView,
    init,
}