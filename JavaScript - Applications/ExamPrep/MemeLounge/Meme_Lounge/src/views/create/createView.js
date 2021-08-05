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
        _router('/home');
    }
    _renderer(createTemplate(onSubmitHandler));
}

async function onSubmitHandler(e){
    e.preventDefault();
    let memeData = Object.fromEntries(new FormData(e.target));
    let errors = [];
    Object.keys(memeData).forEach(x =>{
        if(memeData[x].trim() === ''){
            errors.push(x);
        }
    });
    if(errors.length > 0){
        let message = `${errors.map(x => x = x[0].toUpperCase() + x.slice(1)).join(', ')} cannot be empty`;
        displayNotification(message);
        return;
    }
    try{
       await _fetcher.create(memeData);
        _router('/all');
    } catch (e){
        displayNotification(e.message);
    }
}

export default{
    getView,
    init,
}