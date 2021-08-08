import { displayNotification } from "../../utils/errorNotification.js";
import { createTemplate } from "./createTemplate.js";

//Dependencies
let _router = undefined;
let _renderer = undefined;
let _authenticator = undefined;
let _fetcher = undefined;

function init(router, renderer, authService, fetcher){ //Dependency injection
    _router = router;
    _renderer =renderer;
    _authenticator = authService;
    _fetcher = fetcher;
}

async function getView(){
    if(!_authenticator.isLogged()){
        _router('/dashboard');
    }
    _renderer(createTemplate(onSubmitHandler));
}

async function onSubmitHandler(e){
    e.preventDefault();
    let bookData = Object.fromEntries(new FormData(e.target));
    let errors = [];
    Object.keys(bookData).forEach(x =>{
        if(bookData[x].trim() === ''){
            errors.push(x);
        }
    });
    if(errors.length > 0){
        let message = `${errors.map(x => x = x[0].toUpperCase() + x.slice(1)).join(', ')} cannot be empty`;
        window.alert(message);
        return;
    }
    try{
       await _fetcher.create(bookData);
        _router('/dashboard');
    } catch (e){
        window.alert(e.message);
    }
}

export default{
    getView,
    init,
}