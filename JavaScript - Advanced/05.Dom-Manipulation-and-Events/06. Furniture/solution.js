function solve() {
  const [generateBtn,buyBtn] = Array.from(document.querySelectorAll('button'));
  const [inputData, outputData] = Array.from(document.querySelectorAll('textarea'));
  const tableBody = document.querySelector('tbody');
  const initCheckbox = document.querySelector('input');
  initCheckbox.disabled = false;

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buyStuff);
  function buyStuff(){
    let checkMarks = document.querySelectorAll('input[type="checkbox"]');
    let checkedRows = [];
    let furnitureBought = [];
    let totalPrice = 0;
    let averageFactor = [];
    for (const check of checkMarks) {
      if(check.checked){
        checkedRows.push(check.parentNode.parentNode);
      }
    }
    for (const row of checkedRows) {
      furnitureBought.push(row.getElementsByTagName('p')[0].textContent);
      totalPrice += Number(row.getElementsByTagName('p')[1].textContent);
      averageFactor.push(Number(row.getElementsByTagName('p')[2].textContent));
    }
    outputData.value = `Bought furniture: ${furnitureBought.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${(averageFactor.reduce((a,b) => a+b)/averageFactor.length)}`

  }
  function generate(){
    const items = JSON.parse(inputData.value);
    for (const item of items) {
      let row = document.createElement('tr');
      let imgCell = row.insertCell();
      
      let img = document.createElement('img')
      img.src = item.img;
      imgCell.appendChild(img);
      
      row.appendChild(createElement(item.name));
      row.appendChild(createElement(item.price));
      row.appendChild(createElement(item.decFactor));
      
      let markCell = row.insertCell();
      let checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      markCell.appendChild(checkBox);

      tableBody.appendChild(row);
    }
  }

  function createElement(data)
  {
    let cell = document.createElement('td');
    let parargaph = document.createElement('p');
    parargaph.textContent = data;
    cell.appendChild(parargaph)
    return cell;
  }
}