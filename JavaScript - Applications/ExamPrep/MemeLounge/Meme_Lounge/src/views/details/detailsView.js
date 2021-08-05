import { displayNotification } from "../../utils/errorNotification.js";
import { detailsTemplate } from "./detailsTemplate.js";

//Dependencies
let _router = undefined;
let _renderer = undefined;
let _authenticator = undefined;
let _fetcher = undefined;

//closure
let id = undefined;

function init(router, renderer, authService, fetcher){ //Dependency injection
    _router = router;
    _renderer =renderer;
    _authenticator = authService;
    _fetcher = fetcher;
}

async function getView(ctx){
    id = ctx.params.id;
    let user = _authenticator.getUser();
    let meme = {};
    try{
        meme = await _fetcher.getSingle(id);
    }catch (e)
    {
        console.log('something went wrong');
    }
    if(user){
        meme.owned = meme._ownerId === user.id;
    }
    meme.deleteHandler = deleteHandler;
    _renderer(detailsTemplate(meme));
}
async function deleteHandler(e){
    if(!confirm('Are you sure you want to delete this meme?')){
        return;
    }
    try{
        await _fetcher.del(id);
        _router('/all');
    } catch (e){
        displayNotification('Something went wrong please try again later!');
    }
}
export default{
    getView,
    init,
}