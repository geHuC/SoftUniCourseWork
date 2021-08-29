import { createTemplate } from "./createTemplate.js";
import validator from "../../utils/validator.js";
import fetcherService from "../../services/fetcherService.js";

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
    if(!_authenticator.isLogged()){ // if user is not loogged don't show that page
       await _router('/home');
       return;
    }
    _renderer(createTemplate(onSubmitHandler));
}
async function onSubmitHandler(e){
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let errors = [];
    if(!validator.isLongerOr(data.name, 4)) errors.push('Name should be more at least 4 characters');
    if(!validator.isLonger(data.logoUrl,0)) errors.push('Logo Url is required')
    if(!validator.isLongerOr(data.description, 10)) errors.push('Description should be at least 10 characters');
    if(errors.length > 0){
        _renderer(createTemplate(onSubmitHandler,errors.join(' \n')));
        return;
    }
    try{
        let teamData = await fetcherService.create(data);
        _router(`/details/${teamData._id}`);
    } catch (e){
        console.log(e);
    }
}
export default{
    getView,
    init,
}