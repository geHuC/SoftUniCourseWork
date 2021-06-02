function toggle() {
    let btn = document.getElementsByClassName('button')[0];
    let paragraph = document.getElementById('extra');
    if(btn.textContent === 'More'){
        btn.textContent = 'Less';
        paragraph.style.display = 'block';
    }else{
        btn.textContent = 'More';
        
        paragraph.style.display = 'none';
    }  
}