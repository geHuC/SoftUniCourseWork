function solve() {
    //Keeping variables in closure
    //get the DOM elements
    const infoSpan = document.querySelector('#info > span[class=info]');
    const departButton = document.querySelector('#depart');
    const arriveButton = document.querySelector('#arrive');
    // the first destination of the bus is the depot. 
    // Should probably be passed as argument when calling the solve function istead of being hardcoded.
    let nextStopId = 'depot'; 
    let currentStopName = '';

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`)
        .then((response) => response.json())
        .then((jsonResponse) => {
            currentStopName = jsonResponse.name;
            nextStopId = jsonResponse.next;

            infoSpan.textContent = `Next stop ${currentStopName}`;
            departButton.disabled = true;
            arriveButton.disabled = false;
        })
        .catch(() => {
            infoSpan.textContent = 'Error';
            departButton.disabled = true;
            arriveButton.disabled = true;
        })
    }

    function arrive() {
        infoSpan.textContent = `Arriving at ${currentStopName}`;
        departButton.disabled = false;
        arriveButton.disabled = true; //Should probaly have a private swap buttons function to avoid repetition.
    }

    return {
        depart,
        arrive
    };
}

let result = solve();