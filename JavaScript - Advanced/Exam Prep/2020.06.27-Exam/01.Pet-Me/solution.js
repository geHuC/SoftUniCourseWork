function solve() {
    let addBtn = document.querySelector('#container > button');
    addBtn.addEventListener('click', addPet);

    function addPet(e){
        e.preventDefault();
        let [name,age,kind,owner] = Array.from(document.querySelectorAll('#container > input'));
        if(validator(name.value) ||
            validator(age.value) ||
            validator(kind.value) ||
            validator(owner.value)){
                return;
            }
        if(isNaN(Number(age.value))){
            console.log('wtf');
            return;
        }
        let adoptionUl = document.querySelector('#adoption > ul');

        let li = createElement('li');
        let p = createElement('p','','',li);
        createElement('strong',name.value,'',p);
        let isANode = document.createTextNode(' is a ');
        p.appendChild(isANode);
        createElement('strong',Number(age.value),'',p);
        let yearOldNode = document.createTextNode(' year old ');
        p.appendChild(yearOldNode);
        createElement('strong',kind.value,'',p);
        createElement('span',`Owner: ${owner.value}`,'',li);
        let contactBtn = createElement('button','Contact with owner','',li);
        contactBtn.addEventListener('click', iTakeIt);
        adoptionUl.appendChild(li);
        name.value = '';
        age.value = '';
        kind.value = '';
        owner.value = '';
    }
    function iTakeIt(e){
        let currentLi = e.currentTarget.parentElement;
        let div = createElement('div');
        let input = createElement('input','','',div);
        input.placeholder = 'Enter your names';
        let button = createElement('button','Yes! I take it!','',div);
        button.addEventListener('click', getNewOwner);
        currentLi.appendChild(div);
        e.currentTarget.remove();
        e.currentTarget = null;
    }
    function getNewOwner(e){
        let currentLi = e.currentTarget.parentElement.parentElement;
        let newOwner = currentLi.querySelector('input');
        if(validator(newOwner.value)){
            return;
        }
        let ownerSpan = currentLi.querySelector('span');
        let adoptedUl = document.querySelector('#adopted > ul');
        ownerSpan.textContent = `New Owner: ${newOwner.value}`;
        let button = createElement('button','Checked','',currentLi);
        button.addEventListener('click', (e)=> e.currentTarget.parentElement.remove());
        adoptedUl.appendChild(currentLi);
        e.currentTarget.parentElement.remove();
        e.currentTarget.parentElement = null;
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

