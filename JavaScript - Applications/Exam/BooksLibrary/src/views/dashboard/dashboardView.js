import { dashboardTemplate } from "./dashboardTemplate.js";


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
    let books = []
    try{
       books = await _fetcher.getAll();
    }catch (e){
        console.log(e);
    }
    _renderer(dashboardTemplate(books));
}

export default{
    getView,
    init,
}