function attachEvents() {
    //Getting all DOM elements 
    const locationInput = document.querySelector('#location');
    const submitBtn = document.querySelector('#submit');
    const mainForecastDiv = document.querySelector('#forecast');
    const currentForecastDiv = mainForecastDiv.querySelector('#current');
    const upcomingForecastDiv = mainForecastDiv.querySelector('#upcoming');
    const currentConditionsLabel = currentForecastDiv.querySelector('.label');
    const upcomingConditionsLabel = upcomingForecastDiv.querySelector('.label');

    submitBtn.addEventListener('click',submissionHandler);

    function submissionHandler(){
        //Made it too complicated for no good reason other than wanting it to be able to have an error and still be able to make requests without reloading the page
        //Probably too damn expensive but ¯\_(ツ)_/¯
        if(mainForecastDiv.style.display == 'block'){ //No need to recreate them on first launch
            currentForecastDiv.textContent =''; // Apparantly deletes everything including other elements
            upcomingForecastDiv.textContent='';
            currentForecastDiv.appendChild(currentConditionsLabel); //Re-appending the labels as the previous command deleted everything
            upcomingForecastDiv.appendChild(upcomingConditionsLabel);
        }

        // extracting the value from the input as the field will be cleared before it is used
        let inputCity = locationInput.value; 

        fetch('http://localhost:3030/jsonstore/forecaster/locations')
        .then(response => response.json())
        .then(jsonResponse => {
            let weatherLocationsArray = jsonResponse;
            requestForecast(inputCity, weatherLocationsArray);
        })
        //Showing Error in both sections if the server is down
        .catch(() => displayError(currentForecastDiv,upcomingForecastDiv)); 

        //Displaying the forecast window immediatly for better UX by notifing the uses that something is happening
        mainForecastDiv.style.display = 'block'; 
        locationInput.value = ''; //clearing the imput filed

    }

    function requestForecast(inputCity, weatherLocationsArray){
        let currentCity = weatherLocationsArray.find(x => x.name == inputCity);
        if(!currentCity){
            //Erroring both sections if entered city isn't in the array
            displayError(currentForecastDiv,upcomingForecastDiv); 
            return;
        }
        //Using fetch on both resources so in theory it should fill whichever pulls the data first?
        fetch(`http://localhost:3030/jsonstore/forecaster/today/${currentCity.code}`)
        .then(response => response.json())
        .then(data => displayCurrentConditions(data))
        .catch(() => displayError(currentForecastDiv)); // shows error only in the relevant section

        fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${currentCity.code}`)
        .then(response => response.json())
        .then(data =>displayUpcomingConditions(data))
        .catch(() => displayError(upcomingForecastDiv)); // shows error only in the relevant section

    }
    function displayCurrentConditions(data){
        let {low,high,condition} = data.forecast; //Destructuring the object for ease of use
        let degreeRange = `${low}°/${high}°`; //Concatenating the degree range for ease of use again
        createElement('span',getCondition(condition),'condition symbol',currentForecastDiv); // directly attaching the first span to the DOM
        let conditionSpan = createElement('span','','condition'); //Purpusefully not attaching it to the DOM
        createElement('span',data.name,'forecast-data',conditionSpan);
        createElement('span',degreeRange,'forecast-data',conditionSpan);
        createElement('span',condition,'forecast-data',conditionSpan);
        currentForecastDiv.appendChild(conditionSpan); //Attaching it to the DOM when it is full
    }
    function displayUpcomingConditions(data){
        for (const day of data.forecast) { //Prety much a repeat of displayCurrentConditions just in a loop
            let {low,high,condition} = day;
            let degreeRange = `${low}°/${high}°`;
            let dayElement = createElement('span','','upcoming');
            createElement('span',getCondition(condition),'symbol',dayElement);
            createElement('span',degreeRange,'forecast-data',dayElement);
            createElement('span',condition,'forecast-data',dayElement);
            upcomingForecastDiv.appendChild(dayElement);
        }
    }
    function getCondition(condition){
        const conditionObj ={ //Converted the HTML symbols to JS unicode for ease of use
            'Sunny': '\u2600', 
            'Partly sunny': '\u26C5', 
            'Overcast': '\u2601', 
            'Rain': '\u2614',
        }
        return conditionObj[condition]; //Should probably have a default option
    }
    function displayError(){
        // not really sure where to show the "Error"
        // Best option seems to be in both children divs when intial querry breaks or depending on which fetch breaks only in the corresponding one
        for (const divTag of arguments) { // arguments returns an array of all arguments passed to the function
            divTag.appendChild(document.createTextNode('Error'));
        }
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
}

attachEvents();