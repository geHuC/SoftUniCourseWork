//Get all DOM elements 
const submitBtn = document.querySelector('#submit');
const resultsTable = document.querySelector('#results');
const notificationParagraph = document.querySelector('#form .notification');

submitBtn.addEventListener('click', submitButtonHandler);

getStudentsDataFromServer();

function submitButtonHandler(e){
    e.preventDefault();
    let formData = new FormData(e.target.parentElement); 
    if(!validateFormData(formData)){
        return; // if validation dosn't work return and do nothing
    }
    let firstName = formData.get('firstName');
    let lastName = formData.get('lastName');
    let facultyNumber = formData.get('facultyNumber');
    let grade = Number(formData.get('grade')); // since we are pass validtion we know it is a valid number
    let student = {
        firstName,
        lastName,
        facultyNumber,
        grade
    }; //creating the student data object container to be uploaded to the server

    fetch('http://localhost:3030/jsonstore/collections/students',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(student)
    })
    .then(() => {
        getStudentsDataFromServer();
        formData.reset();
    })
    .catch(err => console.log(err));
}

function getStudentsDataFromServer(){
    fetch('http://localhost:3030/jsonstore/collections/students')
    .then(res => res.json())
    .then(data => fillTableWithData(data))
    .catch(err => console.log(err))
}

function fillTableWithData(data){
    resultsTable.querySelector('tbody').remove(); //Remove the old tableboy
    let tableBody = createElement('tbody'); // create new empty tableBody to be appended to the DOM
    for (const key of Object.keys(data)) {
        let {firstName, lastName, facultyNumber, grade} = data[key];
        let studentRow = createElement('tr','','',tableBody);
        createElement('th',firstName, '', studentRow);
        createElement('th',lastName, '', studentRow);
        createElement('th',facultyNumber, '', studentRow);
        createElement('th',grade.toFixed(2), '', studentRow);
    }
    resultsTable.appendChild(tableBody);
}

//Validation function that checks if each form field contains the correct data and notifies if it doesnt.
function validateFormData(formData){
    let firstName = formData.get('firstName');
    let lastName = formData.get('lastName');
    let facultyNumber = formData.get('facultyNumber');
    let grade = formData.get('grade');
    let passedAllValidations = true;
    
    notificationParagraph.textContent = ''; //clear old notifications if any

    if((typeof firstName) !== 'string' || firstName.trim() === '' || !isNaN(firstName)){
        notificationParagraph.textContent += 'First Name should be valid text/not empty!\n'
        passedAllValidations = false;
    }
    if((typeof lastName) !== 'string' || lastName.trim() === '' ||!isNaN(lastName)){
        notificationParagraph.textContent += 'Last Name should be valid text/not empty!\n'
        passedAllValidations = false;
    }
    if(facultyNumber.trim() === '' || !/^[0-9]*$/.test(facultyNumber)){
        notificationParagraph.textContent += 'Faculty Number should contain only numbers/not empty!\n'
        passedAllValidations = false;
    }
    if(grade.trim() === '' || isNaN(grade)){
        notificationParagraph.textContent += 'Grade should be a valid/not empty!\n'
        passedAllValidations = false;
    }

    return passedAllValidations;
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
