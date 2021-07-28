import fetcherService from "../../services/fetcherService.js";
import {dashboardTemplate} from "./dashboardTemplate.js"

//Dependencies
let _router = undefined;
let _renderer = undefined;

function init(router, renderer){ //Dependency injection
    _router = router;
    _renderer =renderer;
}

async function getView(){
    let allFurniture = undefined;
    
    try{
        allFurniture = await fetcherService.getAll();
    } catch (e){
        alert('Something went wrong, please try again');
        return;
    }
    let text = {};
    text.title = 'Welcome to Furniture System';
    text.subTitle = 'Select furniture from the catalog to view details.'
    _renderer(dashboardTemplate(allFurniture,text));
}

export default{
    getView,
    init
}