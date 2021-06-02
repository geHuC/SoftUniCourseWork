function solve() {
  let textArray = document.getElementById('text').value.trim().toLowerCase().split(' ');
  let caseType = document.getElementById('naming-convention').value;
  let resultContainer = document.getElementById('result');

  switch(caseType){
    case 'Camel Case': resultContainer.textContent = convertToCamel(); break;
    case 'Pascal Case': resultContainer.textContent = convertToPascal(); break;
    default: resultContainer.textContent = 'Error!'; break;
  }
  
  function convertToCamel(){
    let textToReturn = textArray[0];
    for (let i = 1; i < textArray.length; i++) {
      textToReturn += textArray[i][0].toUpperCase() + textArray[i].slice(1);
    }
    return textToReturn;
  };
  function convertToPascal(){
    let textToReturn = '';
    for (let i = 0; i < textArray.length; i++) {
      textToReturn += textArray[i][0].toUpperCase() + textArray[i].slice(1);
    }
    return textToReturn;
  }
}