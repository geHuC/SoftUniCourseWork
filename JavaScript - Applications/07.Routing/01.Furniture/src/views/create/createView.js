import fetcherService from "../../services/fetcherService.js";
import formValidation from "../../utils/formValidation.js";
import { createTemplate } from "./createTemplate.js";

//Dependencies
let _router = undefined;
let _renderer = undefined;
//clusure object

let viewModel = {};
viewModel.title = 'Create New Furniture';
viewModel.onSubmit = formSubmitHandler;
viewModel.btnText = 'CREATE';

function init(router, renderer){ //Dependency injection
    _router = router;
    _renderer =renderer;
}

async function getView(ctx, next){
    _renderer(createTemplate(viewModel));
}
async function formSubmitHandler(e){
    e.preventDefault();
    let validation = formValidation(e.target);
    if(Object.values(validation).some(x=> x === 'is-invalid'))
    {
        Object.assign(validation,viewModel);
        _renderer(createTemplate(validation));
        return;
    }
    try{
        await fetcherService.create(Object.fromEntries(new FormData(e.target)));
        _router.redirect('/dashboard');
    } catch (e){
        alert('Something went wrong, please try again later!');
    }
}
export default{
    getView,
    init,
}