let registerForm = document.querySelector('#register-form');
let loginForm = document.querySelector('#login-form');

registerForm.addEventListener('submit', registrationFormHandler);
loginForm.addEventListener('submit', loginFormHandler);
//Reader be aware some spagetti incoming//

function registrationFormHandler(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    let userEmail = formData.get('email');
    let userPassword = formData.get('password');
    let userRepeatPassword = formData.get('rePass');
    clearErrorStyling(e);
    let validated = true;
    if(!/.+@+.+\.+.+/.test(userEmail)){
        let emailElement = e.target.querySelector('input[name="email"');
        createErrorMessage('Please enter a valid email adress',emailElement);
        validated = false;
    }
    if(userPassword.trim() === ''){    
        let passwordElement = e.target.querySelector('input[name="password"');
        createErrorMessage('Password cannot be empty',passwordElement);
        validated = false;
    }
    if(userPassword !== userRepeatPassword){
        let rePasswordElement = e.target.querySelector('input[name="rePass"');
        createErrorMessage('Passwords do not match',rePasswordElement);
        validated = false;
    }
    if(!validated){
        return;
    }

    let registrationDetails = {
        email: userEmail,
        password: userPassword
    };
    e.target.reset();
    registerUser(registrationDetails);
}
async function registerUser(userDetails){
    const url = 'http://localhost:3030/users/register';
    let emailElement = registerForm.querySelector('input[name="email"');
    try{
        let response = await fetch(url,{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(userDetails)
        });
        
        if(!response.ok){
            if(response.status === 409){
                let message = `${userDetails.email} is already registered.`
                throw new Error(message);
            } else {  
                throw new Error('There was a problem connecting to the server, please try again.');
            }
        }
        let jsonResponse = await response.json();
        localStorage.setItem('token', jsonResponse.accessToken);
        localStorage.setItem('userId', jsonResponse._id);
        location.assign('./index.html');
    } catch (error) {
        createErrorMessage(error.message,emailElement);
        emailElement.classList.add('error');
        return;
    }
}
function clearErrorStyling(e){
    e.target.querySelectorAll('.error-message').forEach(x => x.remove());
    e.target.querySelectorAll('.error').forEach(x => x.classList.remove('error'));
}
function createErrorMessage(message,element){
    let small = document.createElement('small');
    small.textContent = message;
    small.classList.add('error-message');
    element.classList.add('error');
    element.parentElement.appendChild(small);
}
function loginFormHandler(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    let userEmail = formData.get('email');
    let userPassword = formData.get('password');
    clearErrorStyling(e);
    let validated = true;
    if(!/.+@+.+\.+.+/.test(userEmail)){
        let emailElement = e.target.querySelector('input[name="email"');
        createErrorMessage('Please enter a valid email adress',emailElement);
        validated = false;
    }
    if(userPassword.trim() === ''){    
        let passwordElement = e.target.querySelector('input[name="password"');
        createErrorMessage('Password cannot be empty',passwordElement);
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
    loginUser(userDetails);
}

async function loginUser(userDetails){
    const url = 'http://localhost:3030/users/login';
    let emailElement = loginForm.querySelector('input[name="email"');
    let passwordElement = loginForm.querySelector('input[name="password"');
    try{
        let response = await fetch(url,{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(userDetails)
        });
        if(response.status === 403){
            throw new Error('Wrong email/password')
        }
        let jsonResponse = await response.json();
        localStorage.setItem('token', jsonResponse.accessToken);      
        localStorage.setItem('userId', jsonResponse._id);
        location.assign('./index.html');
    } catch (e) {
        createErrorMessage(e.message,emailElement);
        emailElement.classList.add('error');
        passwordElement.classList.add('error');
        return;
    }
}
