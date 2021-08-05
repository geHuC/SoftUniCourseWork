import { myListingsTemplate } from "./myListingsTemplate.js";

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
    let cars = [];
    try{
        cars = await _fetcher.getByOwner(user.id);
    } catch (e) {
        window.alert(e.message);
    }
    _renderer(myListingsTemplate(cars));
}

export default{
    getView,
    init,
}