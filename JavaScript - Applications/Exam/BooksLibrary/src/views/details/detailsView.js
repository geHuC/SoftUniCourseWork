import { detailsTemplate } from "./detailsTemplate.js";

//Dependencies
let _router = undefined;
let _renderer = undefined;
let _authenticator = undefined;
let _fetcher = undefined;

//closure
let id = undefined;
let likes = undefined;

function init(router, renderer, authService, fetcher){ //Dependency injection
    _router = router;
    _renderer =renderer;
    _authenticator = authService;
    _fetcher = fetcher;
}

async function getView(ctx){
    id = ctx.params.id;
    let user = _authenticator.getUser();
    let book = {};
    let hasLiked = undefined
    try{
        book = await _fetcher.getSingle(id);
    }catch (e){
        console.log('something went wrong');
    }
    //could be prettier
    if(user){
        book.owned = book._ownerId === user.id;
        book.logged = true;
        try{ 
            hasLiked = Boolean(await _fetcher.hasLiked(id,user.id));
        }catch (e){
            console.log('something went wrong');
        }
    }
    try{
        likes = await _fetcher.getLikesCount(id);
    }catch (e){
        console.log('something went wrong');
    }
    book.deleteHandler = deleteHandler;
    book.likes = likes;
    book.hasLiked = hasLiked;
    book.likeHandler = likeHandler;
    _renderer(detailsTemplate(book));
}
async function likeHandler(e){
    try{
        await _fetcher.like(id);
        document.querySelector('#total-likes').textContent = `Likes: ${++likes}`;
        e.target.remove();
    } catch (e){
        window.alert(e.message)
    }
}
async function deleteHandler(e){
    if(!confirm('Are you sure you want to delete this meme?')){
        return;
    }
    try{
        await _fetcher.del(id);
        _router('/dashboard');
    } catch (e){
        window.alert('Something went wrong please try again later!');
    }
}
export default{
    getView,
    init,
}