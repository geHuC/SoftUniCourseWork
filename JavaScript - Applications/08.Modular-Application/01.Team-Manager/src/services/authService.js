const baseUrl = 'http://localhost:3030/users';
// I know i should have the fetches in another place
function getUser(){
    return JSON.parse(localStorage.getItem('user'));
}
function isLogged(){
    return Boolean(localStorage.getItem('user'));   
}
async function login(userDetails){
    let response = await fetch(`${baseUrl}/login`,{
        method: 'POST',
        headers: {'Content-Type':'applicaton/json'},
        body: JSON.stringify(userDetails)
    });
    if(response.status === 403){
        throw new Error('Wrong email/password');
    }
    let user = await response.json();
    localStorage.setItem('user',JSON.stringify({
        id: user._id,
        email: user.email,
        accessToken: user.accessToken,
        username: user.username
    }));
}
async function register(userDetails){
    let response = await fetch(`${baseUrl}/register`,{
    method: 'POST',
    headers: {'Content-Type':'applicaton/json'},
    body: JSON.stringify(userDetails)
    });
    if(!response.ok){
        if(response.status === 409){
            throw new Error(`${userDetails.email} is already registered.`);
        }
        throw new Error('Something went wrong, please try again later');
    }
    let user = await response.json();
    localStorage.setItem('user',JSON.stringify({
        id: user._id,
        email: user.email,
        accessToken: user.accessToken,
        username: user.username
    }));
}
async function logout(){
    let response = await fetch(`${baseUrl}/logout`, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'X-Authorization': getUser().accessToken
        }
    });
    localStorage.clear();
}

export default {
    isLogged,
    login,
    register,
    getUser,
    logout
}