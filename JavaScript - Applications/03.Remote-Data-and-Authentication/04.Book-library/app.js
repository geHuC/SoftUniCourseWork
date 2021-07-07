const loadBooksBtn = document.querySelector('#loadBooks');
const submitFormBtn = document.querySelector('form > button');
const booksTable = document.querySelector('body>table');
const submitForm = document.querySelector('form');

loadBooksBtn.addEventListener('click', getAllBooksFromServer);
submitFormBtn.addEventListener('click', formSubmitHandler);
booksTable.addEventListener('click', tableButtonsHandler);

//getAllBooksFromServer(); //Intializing the table setup on load not sure we need it

function tableButtonsHandler(e){
    if(e.target.type !== 'submit'){ // If what we clicked is not a button return 
        return;
    }
    if(e.target.classList.contains('edit')){ // added helper clases to the buttons to handle spliting of tasks appropriately
        showEditBookDialog(e);
    }
    if(e.target.classList.contains('delete')){
        deleteBook(e);
    }
}

function showEditBookDialog(e){
    let bookId = e.target.parentElement.parentElement.id;
    let updateBookURL = `http://localhost:3030/jsonstore/collections/books/${bookId}`;
    fetch(updateBookURL)
    .then(res => res.json())
    .then(data => {
        submitForm.querySelector('h3').textContent = 'Edit FORM';
        //Doesn't work with FormData.set() so went old school
        submitForm.querySelector('input[name=title]').value = data.title;
        submitForm.querySelector('input[name=author]').value = data.author;
        submitFormBtn.textContent = 'Save';
        submitFormBtn.id = bookId;
        submitFormBtn.classList.add('edit-form');
    })
    .catch(err => console.log(err));
}

function hideEditBookDialog(){
    submitForm.querySelector('h3').textContent = 'FORM';
    submitFormBtn.textContent = 'Submit';
    submitFormBtn.id = '';
    submitFormBtn.classList.remove('edit-form');
}

function deleteBook(e){
    let bookId = e.target.parentElement.parentElement.id;
    let deleteURL = `http://localhost:3030/jsonstore/collections/books/${bookId}`;
    fetch(deleteURL,{
        method: 'Delete',
        headers: {'Content-Type':'application/json'},
        body: null // no body needed
    })
    .then(() => getAllBooksFromServer())
    .catch(err => console.log(err));
}

function formSubmitHandler(e){
    e.preventDefault();

    let formData = new FormData(submitForm);
    let serverURL = 'http://localhost:3030/jsonstore/collections/books';
    let author = formData.get('author');
    let title = formData.get('title');
    let book = {author, title};
    let fetchObject = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(book)
    };

    if (e.target.classList.contains('edit-form')){ //added a helper class to the button to cha
        let bookId = e.target.id;
        serverURL += `/${bookId}`;
        fetchObject.method = 'PUT';
        hideEditBookDialog();
    }
    postBookToServer(serverURL,fetchObject);  
    submitForm.reset();
}
function postBookToServer(fetchUrl,fetchObject){
    fetch(fetchUrl,fetchObject)
    .then(() => getAllBooksFromServer())
    .catch(err => console.log(err));
}

function getAllBooksFromServer(){
    fetch('http://localhost:3030/jsonstore/collections/books')
    .then(res => res.json())
    .then(data => displayBooksInTable(data))
    .catch(err => console.log(err));
}

function displayBooksInTable(data){
    //Remove the previous table body
    if(booksTable.querySelector('tbody')){
        document.querySelector('tbody').remove()
    }
    let booksTableBody = createElement('tbody');
    for (const key of Object.keys(data)) { //loop throu data and create new row for every book
        let {author, title} = data[key];
        let bookRow = createElement('tr', '', '', booksTableBody);
        bookRow.id = key;
        createElement('td', author, '', bookRow);
        createElement('td', title, '', bookRow);
        let buttonTd = createElement('td', '', '', bookRow);
        createElement('button','Edit','edit',buttonTd);
        createElement('button','Delete','delete',buttonTd);
    }
    booksTable.appendChild(booksTableBody); //append the tbody element only after we filled it with data for better performance
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