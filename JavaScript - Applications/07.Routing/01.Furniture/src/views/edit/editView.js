import fetcherService from "../../services/fetcherService.js";
import formValidation from "../../utils/formValidation.js";
import { createTemplate } from "../create/createTemplate.js";

//Dependencies
let _router = undefined;
let _renderer = undefined;

//clusure object
let viewModel = {};
viewModel.title = 'Edit Furniture';
viewModel.onSubmit = formSubmitHandler;
viewModel.btnText = 'EDIT';

let itemId = undefined;

function init(router, renderer){ //Dependency injection
    _router = router;
    _renderer =renderer;
}

async function getView(ctx){
    //gonna reuse the template from create probably best to have it in a different folder than create 
    itemId = ctx.params.id;
    let itemDetails = undefined
    try{
        itemDetails = await fetcherService.getSinle(itemId);
    }catch (e){
        alert('Something went wrong, please try again later!');
        return;
    }
    //thats what i get for reusing :/
    _renderer(createTemplate(
                    viewModel,
                    itemDetails.make,
                    itemDetails.model,
                    itemDetails.year,
                    itemDetails.description,
                    itemDetails.price,
                    itemDetails.img,
                    itemDetails.material,
                    ));
}
async function formSubmitHandler(e,ctx){
    e.preventDefault();
    let validation = formValidation(e.target);
    if(Object.values(validation).some(x=> x === 'is-invalid'))
    {
        Object.assign(validation,viewModel);
        _renderer(createTemplate(validation));
        return;
    }
    try{
        //they don't say where but the most logical redirect seems to be to the details page
        await fetcherService.update(itemId,Object.fromEntries(new FormData(e.target)));
        _router.redirect(`/details/${itemId}`);
    } catch (e){
        alert('Something went wrong, please try again later!');
    }
}
export default{
    getView,
    init,
}