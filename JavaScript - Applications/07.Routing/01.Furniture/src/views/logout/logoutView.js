import { logoutTemplate } from "./logoutTemplate.js";

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
    let user = _authenticator.getUser();
    if(user){
        try{
            await _authenticator.logout(user.accessToken);
        } catch (e){
            alert('Something went wrong, please try again later');
        }
        _router.redirect('/');
        return;
    }
}

export default{
    getView,
    init
}