function search() {
  let result = document.getElementById('result');
  let elements = Array.from(document.getElementsByTagName('li'));
  let searchParameter = document.getElementById('searchText').value;
  let matches = 0;
  elements.forEach(element => {
     element.removeAttribute('style');
     if(element.textContent.includes(searchParameter)){
        element.style.fontWeight = 'bold';
        element.style.textDecoration = 'underline';
        matches++;
     }
  });
  result.textContent = `${matches} matches found`;
}
