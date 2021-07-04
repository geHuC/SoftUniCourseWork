function solution() {
    let main = document.querySelector('#main');
    fetch('http://localhost:3030/jsonstore/advanced/articles/list')
    .then(response => response.json())
    .then(jsonResponse => createArticles(jsonResponse,main))
    .catch((e) => console.log(e));
}
function createArticles(data,main){
    for (const article of data) { // cycling through the response
        let {_id,title} = article; // destructuring for ease of use
        let accordionDiv = createElement('div','','accordion');
        let headDiv = createElement('div','','head',accordionDiv);
        createElement('span',title,'',headDiv);
        let button = createElement('button','More','button',headDiv);
        button.id = _id;
        // No need to create the create the extra content before we need it.
        // Will only be created once we click the button.
        main.appendChild(accordionDiv)
    }
    main.addEventListener('click', onClickHandler); // one listener for every element 
}
function onClickHandler(e){
    if(e.target.type !== 'submit'){ // Checking to see if the clicked element is a button
        return;
    }

    let accordionDiv = e.target.parentElement.parentElement;
    // if we have already created the extra content once there is no need to recreate it
    if(accordionDiv.childElementCount > 1 ){
        let extra = accordionDiv.querySelector('.extra');
        if(extra.style.display === 'none'){
            extra.style.display = 'block';
            e.target.textContent = 'Less';
        } else {
            extra.style.display = 'none';
            e.target.textContent = 'More';
        }
        return; 
    }
    //Creating the extra content 
    let extraDiv = createElement('div','','extra');
    let paragraph = createElement('p','','',extraDiv);
    let id = e.target.id;
    accordionDiv.appendChild(extraDiv);
    fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`)
    .then(response => response.json())
    .then(jsonResponse => paragraph.textContent = jsonResponse.content)
    .catch((e) => console.log(e));

    extraDiv.style.display = 'block'; 
    e.target.textContent = 'Less';

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
solution();