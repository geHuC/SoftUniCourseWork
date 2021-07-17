const navigationBar = document.querySelector('.navbar')

function logged(){
    navigationBar.querySelector('.login').parentElement.classList.add('hidden');
    navigationBar.querySelector('.register').parentElement.classList.add('hidden');
    navigationBar.querySelector('.welcome').parentElement.classList.remove('hidden');
    
    navigationBar.querySelector('.logout').parentElement.classList.remove('hidden');
    document.querySelector('#add-movie-button').classList.remove('hidden');
    
    navigationBar.querySelector('.welcome').textContent = `Welcome, ${localStorage.getItem('userEmail')}`;
}

function notLogged(){
    navigationBar.querySelector('.logout').parentElement.classList.add('hidden');
    navigationBar.querySelector('.welcome').parentElement.classList.add('hidden');
    //should not be here but no time to refactor
    document.querySelector('#add-movie-button').classList.add('hidden');
    
    navigationBar.querySelector('.login').parentElement.classList.remove('hidden');
    navigationBar.querySelector('.register').parentElement.classList.remove('hidden');
}
export default{
    logged,
    notLogged
}