function lockedProfile() {
    const radioButtons = Array.from(document.querySelectorAll('input[value="unlock"]'))
    .reduce((obj,x) => {obj[x.name.slice(0,5)] = x; return obj},{});
    const buttons = document.querySelectorAll('button');
    
    for (const button of buttons) {
        button.addEventListener('click', onClick);
    }
    function onClick(e){
        let user = e.target.previousElementSibling.id.slice(0,5);
        if(radioButtons[user].checked){
        let style = ''
        e.target.textContent == 'Show more' ? style = 'block': style = 'none';
        e.target.previousElementSibling.style.display = style;
        e.target.textContent == 'Show more' ? e.target.textContent = 'Hide it' : e.target.textContent = 'Show more';
        }
    }
}