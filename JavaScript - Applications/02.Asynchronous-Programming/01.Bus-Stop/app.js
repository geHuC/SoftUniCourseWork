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
    .then((response) => {
            response.json()
            .then((stopInfo) => {
                stopNameDiv.textContent = stopInfo.name;
                for (const busId of Object.keys(stopInfo.buses)) {
                    createElement('li',`Bus ${busId} arrives in ${stopInfo.buses[busId]} minutes`,undefined,newBusesUl);
                    //Would've been better if newBusesUl wasn't already added to the DOM
                }
            })
            .catch(() => stopNameDiv.textContent = 'Error');
    })
    
    stopID.value = '';
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
}