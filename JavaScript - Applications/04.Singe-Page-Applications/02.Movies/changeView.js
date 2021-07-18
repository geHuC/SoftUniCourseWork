function changeView(view){
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
           location.reload(); //probably inefficient 
            break;
    }
}
export default changeView;