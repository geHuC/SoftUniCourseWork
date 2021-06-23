function solution() {
    const addGiftBtn = document.querySelector('.card:first-child>div>button')
    addGiftBtn.addEventListener('click', addGift);

    function addGift(e){
        let giftList = document.querySelector('.card:nth-child(2)>ul');
        let gift = document.querySelector('.card:first-child>div>input');
        let li = createElement('li',gift.value,'gift');
        let sendBtn = createElement('button','Send');
        let discardBtn = createElement('button','Discard');
        sendBtn.id = 'sendButton';
        discardBtn.id = 'discardButton';
        sendBtn.addEventListener('click', sendGift);
        discardBtn.addEventListener('click', discardGift);
        li.appendChild(sendBtn);
        li.appendChild(discardBtn);
        giftList.appendChild(li);
        gift.value = '';

        let allLi = Array.from(giftList.querySelectorAll('li'));

        allLi.sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(li => giftList.appendChild(li));
    }
    function sendGift(e){
        let sentGiftsList = document.querySelector('.card:nth-child(3)>ul');
        let li = e.currentTarget.parentElement;
        sentGiftsList.appendChild(li);
        Array.from(li.querySelectorAll('button')).forEach(x => x.remove()); 
    }
    function discardGift(e){
        let discardedGiftsList = document.querySelector('.card:nth-child(4)>ul');
        let li = e.currentTarget.parentElement;
        discardedGiftsList.appendChild(li);
        Array.from(li.querySelectorAll('button')).forEach(x => x.remove()); 
    }

    function createElement(type,text,classType){
        let element = document.createElement(type);
        if(text != undefined || text !=''){
            element.textContent = text;
        }
        if(classType != undefined){
            element.className = classType;
        }
        return element;
      }
}