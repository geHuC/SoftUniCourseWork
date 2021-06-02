function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = Array.from(document.getElementsByClassName('container')[0].tBodies[0].rows);
      let searchTerm = document.getElementById('searchField').value;
      rows.forEach(row => {
         row.classList.remove('select');
         let cels = Array.from(row.cells);
         cels.forEach(cell => {
            if(cell.textContent.includes( searchTerm)){
               console.log(cell.textContent);
               row.classList.add('select');
            }
         });
      });
   }
}
