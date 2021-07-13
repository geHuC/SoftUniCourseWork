const catchesDiv = document.querySelector('#catches');
const loadButton = document.querySelector('main aside .load');


loadButton.addEventListener('click', loadFishes)
clearCatches();
ifLoggedIn();

function ifLoggedIn(){
    if(!localStorage.getItem('token')){
        return;
    }
    const navigationDiv = document.querySelector('#guest');
    let a = navigationDiv.querySelector('a');
    a.textContent = 'Log out!';
    a.href = '#';
    a.addEventListener('click', logOutHandler);
}

async function logOutHandler(e){
    e.preventDefault();
    const url = 'http://localhost:3030/users/logout';
    try{

        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'X-Authorization': localStorage.getItem('token')
            }
        });
        localStorage.clear();
        location.reload();
    } catch (e){
        console.log(e);
    }
}



async function loadFishes(){
    const url = 'http://localhost:3030/data/catches/';
    let response = await fetch(url);
    let jsonResponse = await response.json();
    appendCatchesToDOM(jsonResponse);
}

function appendCatchesToDOM(catches){
    let fragment = document.createDocumentFragment();
    catches.forEach(c => fragment.appendChild(createCatchCard(c)));
    clearCatches();
    catchesDiv.appendChild(fragment);
}
function createCatchCard(data){
    let catchDiv = createElement('div','','catch');

    createElement('label','Angler','',catchDiv);
    createInput('text',data.angler,'angler',catchDiv);
    createElement('hr','','',catchDiv);
    createElement('label','Weight','',catchDiv);
    createInput('number',data.weight,'weight',catchDiv);
    createElement('hr','','',catchDiv);
    createElement('label','Species','',catchDiv);
    createInput('text',data.species,'species',catchDiv);
    createElement('hr','','',catchDiv);
    createElement('label','Location','',catchDiv);
    createInput('text',data.location,'location',catchDiv);
    createElement('hr','','',catchDiv);
    createElement('label','Bait','',catchDiv);
    createInput('text',data.bait,'bait',catchDiv);
    createElement('hr','','',catchDiv);
    createElement('label','Capture Time','',catchDiv);
    createInput('number',data.captureTime,'captureTime',catchDiv);
    createElement('hr','','',catchDiv);
    let updateBtn = createElement('button','Update','update',catchDiv);
    updateBtn.disabled = localStorage.getItem('userId') !== data._ownerId;
    createElement('hr','','',catchDiv);
    let deleteBtn = createElement('button','Delete','delete',catchDiv);
    deleteBtn.disabled = localStorage.getItem('userId') !== data._ownerId;

    catchDiv.dataset.id = data._id;
    catchDiv.dataset.ownerId = data._ownerId;
    return catchDiv;
}
function clearCatches(){
    catchesDiv.querySelectorAll('.catch').forEach(x => x.remove());
}
//Function that creates Inputs of with various different properties
function createInput(type,value,classType,appender){
    let element = document.createElement('input');
    if(type != undefined && type !=''){
        element.type = type;
    }
    if(value != undefined && value !=''){
        element.value = value;
    }
    if(appender != undefined && appender != ''){
        appender.appendChild(element);
    }
    if(classType != undefined && classType != ''){
        element.className = classType; // simplifies creation of multiple classes initially
    }
    return element;
}
//Function that simplifies the creation of elements
function createElement(type,text,classType,appender){
    let element = document.createElement(type);
    if(text != undefined && text !=''){
        element.textContent = text;
    }
    if(classType != undefined && classType != ''){
        element.className = classType; // simplifies creation of multiple classes initially
    }
    if(appender != undefined && appender != ''){
        appender.appendChild(element);
    }
    return element;
}