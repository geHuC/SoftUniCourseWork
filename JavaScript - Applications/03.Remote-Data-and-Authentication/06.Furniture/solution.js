// My server has some initial furniture loaded to it so you can use it. Otherwise no furniture will be loaded as there is none on the server you will have to create it yourself.


function solve() {
  if(!localStorage.getItem('token')){ // if no token exist redict directly to home
    location.assign('./home.html')
    return;
  }

  fetch('http://localhost:3030/users/me',{ //try to get your data with the token if it is denied then the token is expired
    method: 'GET',
    headers: {
        'Content-Type' : 'application/json',
        'X-Authorization': localStorage.getItem('token')
    },
  })  
  .then(response => {
    if(!response.ok){ // Token expired go to home and delete token
      localStorage.clear(); // clear any storage for the site
      location.assign('./home.html');
      return;
    }
    location.assign('./homeLogged.html');
  })
  .catch(e => {
    let heading = document.createElement('h1');
    heading.textContent = 'There was a problem connecting to the server.'
    document.querySelector('body').appendChild(heading);
  })  
}