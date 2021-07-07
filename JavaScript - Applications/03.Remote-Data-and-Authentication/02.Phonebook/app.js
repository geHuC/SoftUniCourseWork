const phonebookUl = document.querySelector('#phonebook');
const loadBtn = document.querySelector('#btnLoad');
const personInput = document.querySelector('#person');
const phoneInput = document.querySelector('#phone');
const createBtn = document.querySelector('#btnCreate');

function attachEvents() {
    loadBtn.addEventListener('click', loadPhoneBookFromServer);
    createBtn.addEventListener('click', postPhoneNumberToServer);
    //No need to add an event listener to every delete button 
    phonebookUl.addEventListener('click', removePhonebookEntry);
}
function postPhoneNumberToServer(){
    let person = personInput.value;
    let phone = phoneInput.value;
    fetch(`http://localhost:3030/jsonstore/phonebook/`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({person, phone})
    })
    .then(() => loadPhoneBookFromServer()) // as per the problem requirements we reload the phone book from the server.
    .catch(err => console.log(err));
    personInput.value = '';
    phoneInput.value = '';
}
function removePhonebookEntry(e){
    //check to see if the clicked elemetn is the button
    if(e.target.type !== 'submit'){ 
        return;
    }
    let id = e.target.parentElement.id;
    //Should probably be refactored in another function but since we only remove numbers one way it is fine.
    let deleteURL = `http://localhost:3030/jsonstore/phonebook/${id}`;
    fetch(deleteURL,{
        method: 'DELETE',
        headers:{'Content-Type': 'application/json'},
        body: null // server doesn't require anything to be sent to delete
    })
    .then(() => e.target.parentElement.remove()) // removing the ul with number only when it is removed from the server as well.
    .catch(err => console.log(err));
}

function loadPhoneBookFromServer(){
    fetch('http://localhost:3030/jsonstore/phonebook')
    .then(res => res.json())
    .then(data => appendPhoneBookToDOM(data))
    .catch(err => console.log(err));
}

function appendPhoneBookToDOM(data){
    //clear the phonebook before loading new data
    phonebookUl.textContent = ''; // works on chrome and firefox in win10
    for (const key of Object.keys(data)) {
        let {person,phone} = data[key];
        let phoneBookEntry = document.createElement('li');      
        phoneBookEntry.id = key;
        phoneBookEntry.textContent = `${person}: ${phone}`;
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        phoneBookEntry.appendChild(deleteBtn);
        phonebookUl.appendChild(phoneBookEntry);
    }
}

attachEvents();
