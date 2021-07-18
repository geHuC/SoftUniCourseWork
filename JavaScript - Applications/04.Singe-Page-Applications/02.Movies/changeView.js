import logout from "./logout.js";

function changeView(view, movieId){
    let sections = document.querySelectorAll('section');
    sections.forEach(x => x.classList.add('hidden'));
    switch(view){
        case 'register':
            document.querySelector('#form-sign-up').classList.remove('hidden');
            break;
        case 'login':
            document.querySelector('#form-login').classList.remove('hidden');
            break;
        case 'home':
           location.reload(); //inefficient 
            break;
        case 'logout': //probably shouldn't be here 
            logout();
            break;
        case 'single':
            document.querySelector('#movie-example').classList.remove('hidden');
            break;
    }
}
export default changeView;