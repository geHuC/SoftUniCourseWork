function solve() {
    addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', addToOpen);
    function addToOpen(e){
        e.preventDefault();
        let inProgress = document.querySelector('.wrapper section:nth-child(2) div:nth-child(2)');
        let task = document.querySelector('#task');
        let description = document.querySelector('#description');
        let dueDate = document.querySelector('#date');
        if(validator(task.value) || validator(description.value) || validator(dueDate.value)){
            return;
        }

        let article = createElement('article');
        createElement('h3',task.value,'', article);
        createElement('p',`Description: ${description.value}`,'',article);
        createElement('p',`Due Date: ${dueDate.value}`,'',article);
        let div = createElement('div','','flex',article);
        let startBtn = createElement('button','Start','green',div);
        startBtn.addEventListener('click', moveToInProgress);
        let deleteBtn = createElement('button','Delete','red',div);
        deleteBtn.addEventListener('click', (e) => {
            e.currentTarget.parentElement.parentElement.remove();
        })
        inProgress.appendChild(article);
        task.value ='';
        description.value ='';
        dueDate.value ='';

    }
    function moveToInProgress(e){
        let task = e.currentTarget.parentElement.parentElement;
        let finishBtn = createElement('button','Finish','orange');
        finishBtn.addEventListener('click',moveToFinish);
        e.currentTarget.parentElement.appendChild(finishBtn);
        let inProgress = document.querySelector('.wrapper section:nth-child(3) div:nth-child(2)');
        inProgress.appendChild(task);
        e.currentTarget.remove();
    }
    function moveToFinish(e){
        let task = e.currentTarget.parentElement.parentElement;
        let finish = document.querySelector('.wrapper section:nth-child(4) div:nth-child(2)');
        finish.appendChild(task);
        e.currentTarget.parentElement.remove();
    }
    function validator(input){
        if(input == undefined || input.trim() == ''){
            return true;
        }
        return false;
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
}