import { byYearTemplate } from "./byYearTemplate.js";

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
    _renderer(byYearTemplate([], onClick));
}
async function onClick(e){
    let year = document.querySelector('#search-input').value;
    if(year.trim() === ''){
        window.alert('Please enter a year');
        return
    }
    let cars = [];
    try{
        cars = await _fetcher.getByYear(year);
    } catch (e) {
        window.alert(e.message);
    }
    _renderer(byYearTemplate(cars, onClick));
}

export default{
    getView,
    init,
}