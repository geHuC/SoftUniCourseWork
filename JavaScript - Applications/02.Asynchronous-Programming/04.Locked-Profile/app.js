function lockedProfile() {
    const main = document.querySelector('#main');
    
    fetch('http://localhost:3030/jsonstore/advanced/profiles')
    .then(response => response.json())
    .then(jsonResponse => createProfiles(jsonResponse, main)) //Waiting for the data to be fetched
    .catch((e) => console.log(e));
}
function createProfiles(data, main){
    let currentUser = 2 // 1 is already created on the page not sure if it should be removed
    for (const profile of Object.values(data)) { //cycling through every profile
        let {username,email,age} = profile; // destructuring data for easier use
        let user = `user${currentUser}`; // creating user1, user2 user3 etc.
        let profileDiv = createElement('div','','profile');
        let img = createElement('img','','userIcon',profileDiv);
        img.src = './iconProfile2.png';
        createElement('label','Lock ','',profileDiv);
        createInput('radio',`${user}Locked`,'lock',profileDiv,true,'',''); 
        createElement('label',' Unlock ','',profileDiv);
        createInput('radio',`${user}Locked`,'unlock',profileDiv);
        createElement('br','','',profileDiv);
        createElement('hr','','',profileDiv);
        createElement('label','Username','',profileDiv);
        let userNameField = createInput('text',`${user}Usernamer`,username,profileDiv,'',true,true);
        userNameField.style.display = 'inline-block'; //CSS is only written for 3 profiles should probably be fixed there IRL
        userNameField.style.width = '100%'; //CSS mistakes
        let hiddenFieldsDiv = createElement('div','','',profileDiv);
        hiddenFieldsDiv.id = `${user}HiddenFields`;
        hiddenFieldsDiv.style.display = 'none'; //CSS mistakes
        createElement('hr','','',hiddenFieldsDiv);
        createElement('label','Email:','',hiddenFieldsDiv);
        let emailField = createInput('email',`${user}Email`,email,hiddenFieldsDiv,'',true,true);
        emailField.style.width = '100%'; //CSS mistakes
        createElement('label','Age:','',hiddenFieldsDiv);
        let ageField = createInput('email',`${user}Age`,age,hiddenFieldsDiv,'',true,true);
        ageField.style.width = '100%'; //CSS mistakes
        createElement('button','Show more','',profileDiv);
        main.appendChild(profileDiv); //Adding to DOM once everything is added to the profile
        currentUser++; //Incrementing the user number
    }
    main.addEventListener('click',onClickHandler); //One event on the whole main div
}
function onClickHandler(e){
    if(e.target.type !== 'submit'){ // check to see if a button is pressed otherwise stop
        return;
    }
    let profileDiv = e.target.parentElement;
    let unlockButton = profileDiv.querySelector('input[value="unlock"]'); //geting only the ulock radio button
    if(!unlockButton.checked){ // if unlock is not checked stop
        return;
    }
    let hiddenFields = profileDiv.querySelector('[id*=HiddenFields]'); // getting the hidenFields div
    if(hiddenFields.style.display == 'none'){ // if not shown show, if already shown hide
        hiddenFields.style.display = 'block';
        e.target.textContent = 'Hide it';
    } else {
        hiddenFields.style.display = 'none';
        e.target.textContent = 'Show more';
    }

}
//Function that creates Inputs of with various different properties
function createInput(type,name,value,appender,checked,disabled,readonly){
    let element = document.createElement('input');
    if(type != undefined && type !=''){
        element.type = type;
    }
    if(name != undefined && name !=''){
        element.name = name;
    }
    if(checked != undefined && checked !=''){
        element.checked = checked;
    }
    if(value != undefined && value !=''){
        element.value = value;
    }
    if(disabled != undefined && disabled !=''){
        element.disabled = disabled;
    }
    if(readonly != undefined && readonly !=''){
        element.readOnly = readonly;
    }
    if(appender != undefined && appender != ''){
        appender.appendChild(element);
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