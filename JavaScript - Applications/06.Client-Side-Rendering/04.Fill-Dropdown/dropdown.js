//Dom Elements
const menu = document.querySelector('#menu');
const form = document.querySelector('form');

//Event listeners
form.addEventListener('submit', addItem);

//Intial Loading
init();

//Functions
function addItem(e) {
    e.preventDefault(); // stop form from reloading the page
    let text = form.querySelector('#itemText').value;
    //not needed but makes me sleep easier at night knowing it's here
    if(text.trim()===''){
        alert('Please enter an option before adding'); 
        return;
    }
    fetch(`http://localhost:3030/jsonstore/advanced/dropdown`,{
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify({text})
    })
    .then(res => res.json())
    .then(option => menu.appendChild(new Option(option.text,option._id)))
    .catch(e => console.error(e));
    //Cleanup for better UX
    form.reset();
}

//mix it up a bit with async 
async function init(){
    try{
        let res = await fetch(`http://localhost:3030/jsonstore/advanced/dropdown`);
        let options = await res.json();
        //I know we are doing templating but Option is a built in function in js
        Object.keys(options).forEach(x => {
            menu.appendChild(new Option(options[x].text,x));
        });
    } catch (e){
        console.error(e);
    }
}