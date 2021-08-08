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
    let book = {};
    try{
        book = await _fetcher.getSingle(id);
    }catch (e)
    {
        console.log('something went wrong');
    }
    book.onSubmit = onSubmitHandler;
    _renderer(editTemplate(book));
}
//this should be abstracted alongside the create one but exam time :D
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
       await _fetcher.update(id, bookData);
        _router('/dashboard');
    } catch (e){
        window.alert(e.message);
    }
}

export default{
    getView,
    init,
}