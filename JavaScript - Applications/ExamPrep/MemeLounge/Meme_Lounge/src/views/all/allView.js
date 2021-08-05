import fetcherService from "../../services/fetcherService.js";
import { displayNotification } from "../../utils/errorNotification.js";
import { allTemplate } from "./allTemplate.js";

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
    let memes = [];
    try{
        memes = await fetcherService.getAll();
    } catch (e) {
        displayNotification(e.message);
    }
    _renderer(allTemplate(memes));
}

export default{
    getView,
    init,
}