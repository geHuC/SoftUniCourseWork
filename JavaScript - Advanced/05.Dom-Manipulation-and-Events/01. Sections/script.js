function create(words) {
   const targetDiv = document.getElementById('content');

   words.forEach(element => {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = element;
      paragraph.style.display = 'none';
      div.addEventListener('click',onClick);
      div.appendChild(paragraph);
      targetDiv.appendChild(div);
   });
   function onClick(e){
      e.target.querySelector('p').style.display = '';
   }
}