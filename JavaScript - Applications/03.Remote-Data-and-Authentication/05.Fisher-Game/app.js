//Using the old html template where login and home are two seperate files(same one as in the excercise)

//Get Div Elements
const catchesDiv = document.querySelector('#catches');
const loadButton = document.querySelector('main aside .load');
const addButton = document.querySelector("#addForm .add");
const welcomeSpan = document.querySelector('#welcome');

//Attach Event Listeners
loadButton.addEventListener('click', loadFishes);
addButton.addEventListener('click', addNewFish);
catchesDiv.addEventListener('click', catchButtonHandler);

//Call startup functions
clearCatches(); 
ifLoggedIn();

function ifLoggedIn(){
    if(!localStorage.getItem('token')){ // if no auth token exist return imidietly
        return;
    }
    fetch('http://localhost:3030/users/me',{ //try to get your data with the token if it is denied then the token is expired
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'X-Authorization': localStorage.getItem('token')
        },
    })  
    .then(response => {
        if(!response.ok){ // Token expired go to home and delete token
            localStorage.clear(); // clear any storage for the site
            return;
        }
        //If token is valid change login to log out and enable the add button
        const navigationDiv = document.querySelector('#guest');
        let a = navigationDiv.querySelector('a');
        a.textContent = 'Log out!';
        a.href = '#';
        a.addEventListener('click', logOutHandler);
        addButton.disabled = false;
        welcomeSpan.textContent = "";
        let welcomeTxt = document.createTextNode('Welcome back ');
        welcomeSpan.appendChild(welcomeTxt);
        createElement('strong',localStorage.getItem('userEmail'),'highlited',welcomeSpan);
    })
    .catch(e => console.error(e)); 
}

//Event delegation for the catches buttons
function catchButtonHandler(e){
    if(e.target.type !== 'submit'){ // if what we clicked is not button ignore
        return;
    }
    if(e.target.classList.contains('delete')){
        deleteFish(e);
    }
    if(e.target.classList.contains('update')){
        updateFish(e);
    }
}
async function deleteFish(e){
    const fishId = e.target.parentElement.dataset.id;
    const url = `http://localhost:3030/data/catches/${fishId}`;
    try{
        let response = await fetch(url,{
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                'X-Authorization': localStorage.getItem('token')
            },
        });
        if(!response){
            throw new Error('Somenthing went wrong!');
        }
        e.target.parentElement.remove(); // remove element form the DOM probably should not be done here
    } catch (e) {
        console.log(e);
    }
}
async function updateFish(e){
    const fishId = e.target.parentElement.dataset.id;
    const url = `http://localhost:3030/data/catches/${fishId}`;
    let catchObject = validateAndCreateCatchObject(e); // checking if input is valid
    if(!catchObject) return; // if catch is empty stop here

    try{
        let response = await fetch(url,{
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
                'X-Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(catchObject)
        });
        if(!response){
            throw new Error('Somenthing went wrong!');
        }
    } catch (e) {
        console.log(e);
    }
}

function addNewFish(e){
    //Refactoring mess had all of validateAndCreateCatchObject here but need it agian for update so...
    let catchObject = validateAndCreateCatchObject(e);
    if(!catchObject) return ;// if catch is empty stop here
        addFishToServer(catchObject);
    //Clear the input from the fieldset
    e.target.parentElement.querySelectorAll('input').forEach(x => x.value = '');
}
function validateAndCreateCatchObject(e){
        //Didn't want to chage the html to form so had to get everything manually (would've needed the elements anyway for error checking purposes)
        const formFiledset = e.target.parentElement;
        const angler = formFiledset.querySelector('.angler');
        const weight = formFiledset.querySelector('.weight');
        const species = formFiledset.querySelector('.species');
        const location = formFiledset.querySelector('.location');
        const bait = formFiledset.querySelector('.bait');
        const captureTime = formFiledset.querySelector('.captureTime');
        //Clearing any previous error displays

        clearErrorStyling(formFiledset); //Since I tried to make things pretty I need a little bit of cleanup

        //Checking validity of input information should probably be refactored in another function as well
        let inputIsValid = true;
        if(!validateTextValue(angler)) inputIsValid = false; 
        if(!validateTextValue(species)) inputIsValid = false; 
        if(!validateTextValue(location)) inputIsValid = false; 
        if(!validateTextValue(bait)) inputIsValid = false; 
        if(!validateNumberValue(weight)) inputIsValid = false; 
        if(!validateIntValue(captureTime)) inputIsValid = false; 
        if(!inputIsValid) return false; // if any input isn't valid return 
        
        return catchObject = {
            angler: angler.value,
            weight: Number(weight.value),
            species: species.value,
            location: location.value,
            bait: bait.value,
            captureTime: Number(captureTime.value)
        }
}
async function addFishToServer(fishCatch){
    const url = 'http://localhost:3030/data/catches';
    try{
        let response = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'X-Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(fishCatch)
        })
        if(!response.ok){
            throw new Error('Something went wrong');
        }
        let jsonResponse = await response.json(); 
        // this should not be here but can't be bothered to refactor it right now
        appendCatchesToDOM([jsonResponse]); //function expect an array  
    } catch (e) {
        console.log(e);
    }
}
function clearErrorStyling(container){  
    container.querySelectorAll('.error-message').forEach(x => x.remove()); // remove all error messages
    container.querySelectorAll('.error').forEach(x => x.classList.remove('error')); // take off the error class
}

// Validation fuctions
function validateTextValue(element){
    let value = element.value;
    if(value.trim() === ''){
        createErrorMessage('Must not be empty',element);
        return false;
    }
    if(!isNaN(value)){
        createErrorMessage('Must be text',element);
        return false;
    }
    return true;
}
function validateNumberValue(element){
    let value = element.value;
    if(value.trim() === ''){
        createErrorMessage('Must not be empty',element);
        return false;
    }
    if(isNaN(value)){
        createErrorMessage('Must be number',element);
        return false;
    }
    return true;
}
function validateIntValue(element){ // time needs to be an integer so needed another one
    let value = element.value;
    if(!validateNumberValue(element)){ // check first if it is a number then if it is integer
        return false;
    }
    if(!Number.isInteger(Number(value))){ 
        createErrorMessage('Must be integer',element);
        return false;
    }
    return true;
}
// Helper function that attaches error messages to the invalid input and adds a class to color the borders
function createErrorMessage(message,element){
    let small = document.createElement('small');
    small.textContent = message;
    small.classList.add('error-message');
    element.classList.add('error');
    element.after(small);
}


async function logOutHandler(e){
    e.preventDefault(); // Since it is an anchor tag we need to prevent redirection when clicked
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
    clearCatches(); // clear old data in the DOM
    appendCatchesToDOM(jsonResponse); //append the pulled data
}

function appendCatchesToDOM(catches){
    let fragment = document.createDocumentFragment();
    catches.forEach(c => fragment.appendChild(createCatchCard(c)));
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

function clearCatches(){ // simple cleanup function to delete every catch from the container
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