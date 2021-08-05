import { navigationTemplate } from "./navigationTemplate.js";

//Dependencies
let _router = undefined;
let _renderer = undefined;
let _authenticator = undefined;

function init(router, renderer, authService){ //Dependency injection
    _router = router;
    _renderer =renderer;
    _authenticator = authService;
}

async function getView(ctx, next){
    let viewModel = {}
    viewModel.logged = false;
    if(_authenticator.isLogged()){
        viewModel.logged = true;
        viewModel.username = _authenticator.getUser().username;
    }
    viewModel.logoutHandler = logoutHandler;
    viewModel[ctx.path] = 'active';
    _renderer(navigationTemplate(viewModel));
    next();
}
async function logoutHandler(e){
    let user = _authenticator.getUser();
    if(user){
        try{
            await _authenticator.logout(user.accessToken);
        } catch (e){
            console.log('Something went wrong logging out on the server');
            _authenticator.clearStorage();
        }
        _router.redirect('/');
    }
}
export default{
    getView,
    init,
}