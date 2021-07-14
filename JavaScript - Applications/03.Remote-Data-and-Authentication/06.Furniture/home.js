const furnitureTable = document.querySelector('#furniture-table');
const tableBody = furnitureTable.querySelector('tbody');

clearFunitureTable();
loadFurnitureFromServer();


function loadFurnitureFromServer(){
    fetch('http://localhost:3030/data/furniture')
    .then(response => response.json())
    .then(data => appendFurnitureToDOM(data))
    .catch(e => console.error(e));
}
function appendFurnitureToDOM(data){
    let fragment = new DocumentFragment();
    data.forEach(x => fragment.appendChild(createFurnitureRow(x)));
    if(data.length === 0){
        createElement('h1','There is no data in the server','',fragment);
        createElement('p','Either log in and create some data or use the bundled server in this homework I\'ve added some initial data there','',fragment);
    }
    tableBody.prepend(fragment);
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
    checkBox.disabled = true;
    return row;
}
function clearFunitureTable(){
    tableBody.querySelectorAll('tr').forEach(x => x.remove());
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