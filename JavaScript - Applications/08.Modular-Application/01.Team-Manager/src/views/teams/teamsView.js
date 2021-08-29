import fetcherService from "../../services/fetcherService.js";
import { teamsTemplate } from "./teamsTemplate.js";

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
    let viewModel = {};
    viewModel.isLogged = _authenticator.isLogged();
    viewModel.teams = [];
    try{
        viewModel.teams = await fetcherService.getAll();
        let teamIds = viewModel.teams.map(x => `"${x._id}"`);
        let members = await fetcherService.getMembers(teamIds);
        viewModel.teams.forEach(x => x.members = members.filter(m => m.teamId === x._id).length);
        _renderer(teamsTemplate(viewModel));

    } catch (e){
        console.log(e);
    }
}

export default{
    getView,
    init,
}