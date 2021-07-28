import errorStyling from "../../utils/errorStyling.js";
import { registerTemplate } from "./registerTemplate.js";

//Dependencies
let _router = undefined;
let _renderer = undefined;
let _authenticator = undefined

function init(router, renderer, authService){ //Dependency injection
    _router = router;
    _renderer =renderer;
    _authenticator = authService;
}

async function getView(){
    _renderer(registerTemplate(formSubmitHandler));
}

async function formSubmitHandler(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    let emailElement = e.target.querySelector('input[name="email"');
    let passwordElement = e.target.querySelector('input[name="password"');
    let rePasswordElement = e.target.querySelector('input[name="rePass"');
    let userEmail = emailElement.value;
    let userPassword = passwordElement.value;
    let userRepeatPassword = rePasswordElement.value;
    //Clearing any erros styling that has been applied
    errorStyling.clear(e); 

    // Simple data validation
    let validated = true;
    if(!/.+@+.+\.+.+/.test(userEmail)){ // check to see if what is entered is an email (looks for @ and . sandwitched between any text)
        errorStyling.create('Please enter a valid email adress',emailElement);
        validated = false;
    }
    // if(userPassword.trim().length < 6){ // to prevent 6 empty spaces
    //     errorStyling.create('Password must be at least 6 characters',passwordElement);
    //     validated = false;
    // }
    if(userPassword.trim() === ''){ 
        errorStyling.create('Password cannot be empty',passwordElement);
        validated = false;
    }
    if(userPassword !== userRepeatPassword){
        errorStyling.create('Passwords do not match',rePasswordElement);
        validated = false;
    }
    if(!validated){
        return; // if any of the validations fail stop there
    }

    let registrationDetails = {
        email: userEmail,
        password: userPassword
    };
    try{
        await _authenticator.register(registrationDetails);
        _router.redirect('/dashboard');
    } catch (e){
        errorStyling.create(e.message, emailElement);
        emailElement.classList.add('error');
    }
}

export default{
    getView,
    init,
}