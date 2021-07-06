function getInfo() {
    //Get dom elements
    let stopID = document.querySelector('#stopId')
    let stopNameDiv = document.querySelector('#stopName');
    let busesUl = document.querySelector('#buses');
    let resultDiv = document.querySelector('#result');
    //Clear data before request is made as per the requirements
    stopNameDiv.textContent = '';
    //busesUl.innerHTML = ''; //easiest way to clear the UL from all list items  
    //Since using innerHTML is frowned upon next best way is to remove the element and create new one
    busesUl.remove();
    let newBusesUl = createElement('ul', undefined, undefined, resultDiv);
    newBusesUl.id = 'buses' //Would be better to fill it with list items first and then append it, but we need it cleared beforehand.

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopID.value}`)
    .then(response => response.json())
    .then(stopInfo => {
        stopNameDiv.textContent = stopInfo.name;
        for (const busId of Object.keys(stopInfo.buses)) {
            let listItem = document.createElement('li');
            listItem.textContent = `Bus ${busId} arrives in ${stopInfo.buses[busId]} minutes`;
            newBusesUl.appendChild(listItem);
            //Would've been better if newBusesUl wasn't already added to the DOM
        }
    })
    .catch((err) => stopNameDiv.textContent = 'Error');
    
    stopID.value = '';
}