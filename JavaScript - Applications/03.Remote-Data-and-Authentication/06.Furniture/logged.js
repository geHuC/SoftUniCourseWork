//IT's spagetti time below but somehow it works

const logoutBtn = document.querySelector('#logoutBtn');
const buyBtn = document.querySelector('#buyBtn');
const createProductForm = document.querySelector('#create-product');
const furnitureTable = document.querySelector('#furniture-table');
const tableBody = furnitureTable.querySelector('tbody');
const ordersDiv = document.querySelector('.orders');
const allOrdersBtn = document.querySelector('#allOrdersBtn');

clearFunitureTable();
clearAllOrders();
loadFurnitureFromServer();

createProductForm.addEventListener('submit',submitProductFormHandler);
buyBtn.addEventListener('click', buySelectedItems);
allOrdersBtn.addEventListener('click', getBoughtItems);
logoutBtn.addEventListener('click', logOut);

async function logOut(e){
    e.preventDefault(); // preventing the link from asking a new page
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
        location.assign('./index.html');
    } catch (e){
        console.log(e);
    }
}
async function getBoughtItems(){
    //there must be a better way to do this
    let url = `http://localhost:3030/data/orders?where=_ownerId%3D%22${localStorage.getItem('userId')}%22`;
    let response = await fetch(url);
    let data =  await response.json();
    let totalBuys = data.reduce((acc, val) => acc.concat(val.objectIds),[]); //You probably can buy multiple times
    Promise.all(totalBuys.map(x => 
        fetch(`http://localhost:3030/data/furniture/${x}`)
        .then(res => res.json())
        .catch(e => console.error(e))
    ))
    .then(data => displayBoughtItems(data));
}
async function displayBoughtItems(data){
    let boughtFurniture = [];
    let totalPrice = 0;
    
    data.forEach(x => {
        boughtFurniture.push(x.name);
        totalPrice += x.price;
    });

    clearAllOrders();

    let fragment = new DocumentFragment();
    let p1 = createElement('p','Bought furniture: ','',fragment);
    createElement('span',boughtFurniture.join(', '),'',p1);
    let p2 = createElement('p','Total price: ','',fragment);
    createElement('span',`${totalPrice} $`,'',p2);
    ordersDiv.appendChild(fragment);

}
function buySelectedItems(e){
    let ids = [...tableBody.querySelectorAll('input[type="checkbox"')]
      .filter(x => x.checked)
      .map(x => x.dataset.id);

    fetch('http://localhost:3030/data/orders',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'X-Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({objectIds: ids})
    })
    .then(res => tableBody.querySelectorAll('input[type="checkbox"').forEach(x => x.checked = false))
    .catch(e => console.error(e));
}
function submitProductFormHandler(e){
    e.preventDefault(); // stop the from from sendig a post request
    //Not going to use FormData for easier error styling
    const currentForm = e.target;
    clearErrorStyling(currentForm);

    const name = currentForm.querySelector('input[name="name"');
    const price = currentForm.querySelector('input[name="price"');
    const factor = currentForm.querySelector('input[name="factor"');
    const img = currentForm.querySelector('input[name="img"');

    //validate inputs
    let inputIsValid = true;
    if(!validateTextValue(name)) inputIsValid = false; 
    if(!validateNumberValue(price)) inputIsValid = false;
    if(!validateNumberValue(factor)) inputIsValid = false;
    if(!validateUrlValue(img)) inputIsValid = false;
    if(!inputIsValid) return false; // if any input isn't valid return 
    let furnitureObj = {
        name: name.value,
        price: Number(price.value),
        factor: Number(factor.value),
        img: img.value
    }
    addFurnitureToServer(furnitureObj);
    currentForm.reset();
}
function addFurnitureToServer(obj){
    fetch(`http://localhost:3030/data/furniture`,{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'X-Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify(obj)
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Something went wrong');
        }
        return jsonResponse = response.json(); 
    })
    .then(data => {
        // this should not be here but can't be bothered to refactor it right now
        appendFurnitureToDOM([data]); //function expects an array
    })
    .catch( e => console.error(e))      
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
function validateUrlValue(element){
    let value = element.value;
    //got the regex from stackOverflow
    let regEx = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/

    if(value.trim() === ''){
        createErrorMessage('Must not be empty',element);
        return false;
    }
    if(!regEx.test(value)){
        createErrorMessage('Must be valid URL',element);
        return false;
    }
    return true;
}
function clearErrorStyling(container){  
    container.querySelectorAll('.error-message').forEach(x => x.remove()); // remove all error messages
    container.querySelectorAll('.error').forEach(x => x.classList.remove('error')); // take off the error class
}
function loadFurnitureFromServer(){
    fetch('http://localhost:3030/data/furniture')
    .then(response => response.json())
    .then(data => appendFurnitureToDOM(data))
    .catch(e => console.error(e));
}
function appendFurnitureToDOM(data){
    let fragment = new DocumentFragment();
    data.forEach(x => fragment.appendChild(createFurnitureRow(x)));
    tableBody.appendChild(fragment);
}
function createFurnitureRow(furnitureObj){
    let {name, price, factor, img} = furnitureObj;
    let row = document.createElement('tr');
    let imgTd = createElement('td','','',row);
    let imgTag = createElement('img','','',imgTd);
    imgTag.src = img;
    let nameTd = createElement('td','','',row);
    createElement('p',name,'',nameTd);
    let priceTd = createElement('td','','',row);
    createElement('p',price,'',priceTd);
    let factorTd = createElement('td','','',row);
    createElement('p',factor,'',factorTd)
    let checkBoxTd = createElement('td','','',row);
    let checkBox = createElement('input','','',checkBoxTd);
    checkBox.type = 'checkbox';
    checkBox.dataset.id = furnitureObj._id;
    return row;
}
function clearFunitureTable(){
    tableBody.querySelectorAll('tr').forEach(x => x.remove());
}
function clearAllOrders(){
    ordersDiv.querySelectorAll('p').forEach(x => x.remove());
}
// Helper function that attaches error messages to the invalid input and adds a class to color the borders
function createErrorMessage(message,element){
    let small = document.createElement('small');
    small.textContent = message;
    small.classList.add('error-message');
    element.classList.add('error');
    element.after(small);
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