import { displayNotification } from "../../utils/errorNotification.js";
import { editTemplate } from "./editTemplate.js";

//Dependencies
let _router = undefined;
let _renderer = undefined;
let _authenticator = undefined;
let _fetcher = undefined;

//closure
let id = undefined;

function init(router, renderer, authService, fetcher){ //Dependency injection
    _router = router;
    _renderer = renderer;
    _authenticator = authService;
    _fetcher = fetcher;
}

async function getView(ctx){
    id = ctx.params.id;
    let meme = {};
    try{
        meme = await _fetcher.getSingle(id);
    }catch (e)
    {
        console.log('something went wrong');
    }
    meme.onSubmit = onSubmitHandler;
    _renderer(editTemplate(meme));
}
async function onSubmitHandler(e){
    e.preventDefault();
    let carData = Object.fromEntries(new FormData(e.target));
    let errors = [];
    Object.keys(carData).forEach(x =>{
        if(carData[x].trim() === ''){
            errors.push(x);
        }
    });
    if(errors.length > 0){
        let message = `${errors.map(x => x = x[0].toUpperCase() + x.slice(1)).join(', ')} cannot be empty`;
        displayNotification(message);
        return;
    }
    
    carData.year = Number(carData.year);
    carData.price = Number(carData.price);
    try{
       await _fetcher.update(id, carData);
        _router(`/details/${id}`);
    } catch (e){
        displayNotification(e.message);
    }
}
export default{
    getView,
    init,
}