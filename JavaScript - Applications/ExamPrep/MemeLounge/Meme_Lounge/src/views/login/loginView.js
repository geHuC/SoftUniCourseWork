
import { displayNotification } from "../../utils/errorNotification.js";
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
    if(_authenticator.isLogged()){
        await _router('/all');
    } else {
        _renderer(loginTemplate(formSubmitHandler));
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
    try{
        await _authenticator.login(formInput);
        _router.redirect('/all');
    } catch (e){
        displayNotification(e.message);
    }
}
export default{
    getView,
    init,
}