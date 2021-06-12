function solve() {
    const onScreenBtn = document.querySelector('#container button');
    const moviesUl = document.querySelector('#movies ul');
    const archiveUl = document.querySelector('#archive ul');
    const clearArchiveBtn = document.querySelector('#archive > button');

    onScreenBtn.addEventListener('click',addMovieToSection);
    clearArchiveBtn.addEventListener('click',clearArchive);
    function addMovieToSection(e){
        e.preventDefault();
        let [name,hall,ticketPrice] = Array.from(document.querySelectorAll('#container input'));
        if(textValidator(name) && textValidator(hall) && numberValidator(ticketPrice)){
            let li = createElement('li');
            let nameSpan = createElement('span',name.value);
            let hallStrong = createElement('strong',`Hall: ${hall.value}` );
            let div = createElement('div');
            let priceStrong = createElement('strong',Number(ticketPrice.value).toFixed(2));
            let ticketsInput = createElement('input');
            ticketsInput.placeholder = 'Tickets Sold';
            let button = createElement('button','Archive');
            button.addEventListener('click', archiveMovie);

            div.appendChild(priceStrong);
            div.appendChild(ticketsInput);
            div.appendChild(button);
            li.appendChild(nameSpan);
            li.appendChild(hallStrong);
            li.appendChild(div);
            moviesUl.appendChild(li);
        }
        name.value = '';
        hall.value = '';
        ticketPrice.value ='';
    }
    function archiveMovie(e){
        let movieToArchive = e.target.parentElement.parentElement;
        let ticketsSoldInput = movieToArchive.querySelector('input');
        if(numberValidator(ticketsSoldInput)){
            let ticketSold = Number(ticketsSoldInput.value);
            let div = movieToArchive.querySelector('div');
            let price = Number(div.querySelector('strong').textContent);
            let totalAmountStrong = movieToArchive.querySelector('strong');
            let deleteButton = createElement('button','Delete');
            deleteButton.addEventListener('click',deleteFromArchive);
            totalAmountStrong.textContent = `Total amount: ${(price * ticketSold).toFixed(2)}`;
            div.remove();
            movieToArchive.appendChild(deleteButton);
            archiveUl.appendChild(movieToArchive);
        }
    }
    function clearArchive(){
        archiveUl.innerHTML ='';
    }
    function deleteFromArchive(e){
        e.target.parentElement.remove();
    }
    function createElement(type,text){
        let element = document.createElement(type);
        if(text){
            element.textContent = text;
        }
        return element;
    }
    function textValidator(text){
        if(text.value == undefined || text.value.trim() == ''){
            return false;
        }
        return true;
    }
    function numberValidator(number){
        if(number.value == undefined || number.value.trim() == '' || isNaN(Number(number.value))){
            return false;
        }
        return true;
    }
        
}
