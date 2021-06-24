function solve() {
    const addButton = document.querySelector('.action form button');
    addButton.addEventListener('click', addTraining);

    function addTraining(e){
        e.preventDefault();
        let lecture = document.querySelector('.form-control input[name="lecture-name"]');
        let date = document.querySelector('.form-control input[name="lecture-date"]');
        let module = document.querySelector('.form-control select[name="lecture-module"]');
        if(validator(lecture.value) || validator(date.value) || validator(module.value) || module.value == 'Select module'){
            return;
        }
        let modulesDiv = document.querySelector('.modules');

        let [dateString, timeString] = date.value.split('T');
        dateString = dateString.split('-').join('/');
        
        let div = modulesDiv.querySelector(`#${module.value}`);
        if(div === null){
            div = createElement('div',undefined,'module');
            div.id = module.value; 
            createElement('h3',`${module.value.toUpperCase()}-MODULE`,'',div);
            createElement('ul','','',div);
        }
        let ul = div.querySelector('ul');
        let li = createElement('li','','flex',ul);
        li.setAttribute('name',date.value);
        createElement('h4',`${lecture.value} - ${dateString} - ${timeString}`,'',li);
        let button = createElement('button','Del','red',li);
        button.addEventListener('click', removeItem);
        modulesDiv.appendChild(div);

        let allLi = Array.from(ul.querySelectorAll('li'));

        allLi.sort((a, b) => a.getAttribute('name').localeCompare(b.getAttribute('name')))
        .forEach(li => ul.appendChild(li));   
        lecture.value = '';
        date.value ='';
        module.value = 'Select module';
    }
    function removeItem(e){
        let div = e.currentTarget.parentElement.parentElement.parentElement;
        e.currentTarget.parentElement.remove();

        let liCount = div.querySelector('ul').querySelectorAll('li').length;
        if(liCount == 0){
            div.remove();
        }
    }
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

    function validator(input){
        if(input == undefined || input.trim() == ''){
            return true;
        }
        return false;
    }
};