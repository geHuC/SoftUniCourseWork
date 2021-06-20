function validate() {
    const userNameField = document.querySelector('#username');
    const emailField = document.querySelector('#email');
    const passwordField = document.querySelector('#password');
    const confirmPassworField = document.querySelector('#confirm-password');
    const companyCheckbox = document.querySelector('#company');
    const companyFieldSet = document.querySelector('#companyInfo');
    const companyNumberField = document.querySelector('#companyNumber');
    const submitButton = document.querySelector('#submit');
    const validDiv = document.querySelector('#valid');
    const allInputFields = Array.from(document.querySelectorAll('input'));

    submitButton.addEventListener('click', checkFieldsValidity)
    companyCheckbox.addEventListener('change', toggleCompanyInfo);

    function checkFieldsValidity(e){
        let allValid = true;
        allInputFields.forEach(x => x.style.borderColor = null);
        e.preventDefault();
        if(validateUsername(userNameField.value)){
            userNameField.style.borderColor = 'red';
            allValid = false;
        }
        if(validateEmail(emailField.value)){
            emailField.style.borderColor = 'red';
            allValid = false;
        }
        if(validatePassword(passwordField.value)){
            passwordField.style.borderColor = 'red';
            allValid = false;
        }
        if(validateConfirmPassword(confirmPassworField.value,passwordField.value)){
            confirmPassworField.style.borderColor = 'red';    
            passwordField.style.borderColor = 'red';
            allValid = false;
        }
        if(companyCheckbox.checked){
            if(validateCompanyNumber(companyNumberField.value)){
                companyNumberField.style.borderColor = 'red';
                allValid = false;
            }
        }

        if(allValid){
            validDiv.style.display = 'block';
        }
    }
    function validateCompanyNumber(number){
        let newNumber = Number(number)
        if(number.trim() === ''|| isNaN(newNumber)){
            return true;
        }
        if(newNumber < 1000 || newNumber > 9999){
            return true;
        }
        return false;
    }
    function validateEmail(email){
        const regeX = /^.*@.*\..*$/;
        if(!regeX.test(email)){
            return true;
        }
    }
    function validateConfirmPassword(confirmation,password){
        if(confirmation !== password){
            return true;
        }
        if(validatePassword(confirmation)){
            return true;
        }
    }
    function validatePassword(password){
        const regeX = /^[a-zA-Z0-9_]*$/
        if(password.length <5 || password.length > 15){
            return true;
        }
        if(!regeX.test(password)){
            return true;
        }
    }
    function validateUsername(userName){
        const regX = /^[a-zA-Z0-9]*$/
        if(userName.length <3 || userName.length >20){
            return true;
        }
        if(!regX.test(userName)){
            return true;
        }
    }
    function toggleCompanyInfo() {
        companyCheckbox.checked ? companyFieldSet.style.display = 'block' : companyFieldSet.style.display = 'none';
    }
}
