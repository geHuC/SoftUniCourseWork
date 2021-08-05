const container = document.querySelector('#container');
// ugly too lazy to make it with lit
const notifications = document.createElement('section');
notifications.id = 'notifications';
const errorBox = document.createElement('div');
errorBox.id = 'errorBox';
errorBox.className = 'notification';
const span = document.createElement('span');
errorBox.appendChild(span);
notifications.appendChild(errorBox);

export const displayNotification = (message) =>{
    span.textContent = message;
    container.appendChild(notifications);
    setTimeout(removeNotification,3000);
}
function removeNotification(){
    notifications.remove();
}