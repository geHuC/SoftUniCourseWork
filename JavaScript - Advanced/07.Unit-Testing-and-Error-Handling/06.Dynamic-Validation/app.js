function validate() {
    const inputField = document.querySelector('#email');
    inputField.addEventListener('change', onChange);
    function onChange(e){
        let textInput = e.target.value;
        const regEx = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if(!regEx.test(textInput)){
            inputField.className = 'error';
        }else{
            inputField.className = '';
        }
    }
}