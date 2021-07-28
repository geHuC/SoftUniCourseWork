import errorStyling from "../../utils/errorStyling.js";
import { loginTemplate } from "./loginTemplate.js";

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
    _renderer(loginTemplate(formSubmitHandler));
}

async function formSubmitHandler(e){
    e.preventDefault();
    let emailElement = e.target.querySelector('input[name="email"');
    let passwordElement = e.target.querySelector('input[name="password"');
    let userEmail = emailElement.value;
    let userPassword = passwordElement.value;
    errorStyling.clear(e);
    let validated = true;
    if(!/.+@+.+\.+.+/.test(userEmail)){ // i think bootstrap also does some checks ?
        errorStyling.create('Please enter a valid email adress',emailElement);
        validated = false;
    }
    if(userPassword.trim() === ''){    
        errorStyling.create('Password cannot be empty', passwordElement);
        validated = false;
    }
    if(!validated){
        return;
    }
    let userDetails = {
        email: userEmail,
        password: userPassword
    };
    e.target.reset();
    try{
        await _authenticator.login(userDetails);
        _router.redirect('/dashboard');
    }catch (e){
        errorStyling.create(e.message, emailElement);
        emailElement.classList.add('error');
        passwordElement.classList.add('error');
    }
}
export default{
    getView,
    init,
}