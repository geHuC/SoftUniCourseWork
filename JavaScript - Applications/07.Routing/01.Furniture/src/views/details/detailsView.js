import fetcherService from "../../services/fetcherService.js";
import { detailsTemplate } from "./detailsTemplate.js";

//Dependencies
let _router = undefined;
let _renderer = undefined;
let _authenticator = undefined

function init(router, renderer, authService){ //Dependency injection
    _router = router;
    _renderer =renderer;
    _authenticator = authService;
}
//clusure object
let itemId = undefined;

async function getView(ctx){
    const user = _authenticator.getUser();
    itemId = ctx.params.id
    let item = undefined;
    try{
        item = await fetcherService.getSinle(itemId);
    } catch (e){
        alert('Something went wrong, please try again later!');
    }
    //if the item was created by the user isOwned is true
    if(user) item.isOwned = item._ownerId === user.id;

    item.deleteHandler = deleteHandler;
    if(item.img.startsWith('.')){ //server has bad naming :(
        item.img = item.img.slice(1);
    } 
    _renderer(detailsTemplate(item));
}
async function deleteHandler(e){
    if(confirm('Are you sure you want to delete the item?')){
        try{
            await fetcherService.del(itemId);
            _router.redirect('/dashboard');
        } catch (e){
            alert('Something went wrong please try again.')
        }
    }
}
export default{
    getView,
    init,
}