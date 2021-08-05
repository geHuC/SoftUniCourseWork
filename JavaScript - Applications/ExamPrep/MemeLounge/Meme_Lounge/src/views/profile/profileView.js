import { profileTemplate } from "./profileTemplate.js";

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
    let user = _authenticator.getUser();
    let memes = [];
    if(!user){
        _router('/home');
        return
    }
    try{
        memes = await _fetcher.getByOwnerDesc(user.id);
    } catch {
        console.log('Server didn\'t respond correctly');
    }
    _renderer(profileTemplate(user,memes));
}

export default{
    getView,
    init,
}