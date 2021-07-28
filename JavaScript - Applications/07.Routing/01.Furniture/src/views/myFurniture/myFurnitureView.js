import fetcherService from "../../services/fetcherService.js";
import { dashboardTemplate } from "../dashboard/dashboardTemplate.js";

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
    const user = _authenticator.getUser();

    let myFurniture = undefined;
    try{
        myFurniture = await fetcherService.getByOwner(user.id);
    } catch (e){
        alert('Something went wrong, please try again');
        return;
    }
    //again reusing templates should be in differetn folder should be refactored
    let text = {};
    text.title = 'My Furniture';
    text.subTitle = 'This is a list of your publications.'
    _renderer(dashboardTemplate(myFurniture,text));
}

export default{
    getView,
    init,
}