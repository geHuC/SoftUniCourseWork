function notify(message) {
  // TODO:
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.display = 'block';
  notification.addEventListener('click', onClick); function onClick(e){
    e.target.style.display = 'none';
    e.target.textContent = '';
    e.target.removeEventListener('click',onClick);
  }
}