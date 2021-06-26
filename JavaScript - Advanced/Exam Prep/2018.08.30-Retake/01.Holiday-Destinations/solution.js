function addDestination(e){
    let [city,country] = Array.from(document.querySelectorAll('#input .inputData'));
    let seasons = document.querySelector('#seasons');
    if(city.value.trim() === '' || country.value.trim() ===''){
        return;
    }
    let destinationsList = document.querySelector('#destinationsList');
    let tr = createElement('tr','','',destinationsList);
    createElement('td',`${city.value}, ${country.value}`,'',tr);
    let seasonText = seasons.value.charAt(0).toUpperCase() + seasons.value.substr(1).toLowerCase();
    createElement('td',seasonText,'',tr); //seasons[seasons.selectedIndex].textContent doesn't work in judge 
    let summer = document.querySelector('#summer');
    let autumn = document.querySelector('#autumn');
    let winter = document.querySelector('#winter');
    let spring = document.querySelector('#spring');
    let obj = {summer, autumn, winter, spring};
    obj[seasons.value].value = Number(obj[seasons.value].value) + 1;

    city.value ='';
    country.value = '';
    seasons.value = 'summer';

    function createElement(type,text,classType,appender){
        let element = document.createElement(type);
        if(text != undefined && text !=''){
            element.textContent = text;
        }
        if(classType != undefined && classType != ''){
            element.className = classType;
        }
        if(appender != undefined && appender != ''){
            appender.appendChild(element);
        }
        return element;
      }
}