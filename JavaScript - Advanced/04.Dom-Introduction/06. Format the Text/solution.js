function solve() {
  const input = document.getElementById('input').value.split('.').filter(Boolean);
  const output = document.getElementById('output');
  let rowCount = 0;
  let formattedText = '';
  for (let i = 0; i < input.length; i++) {
    formattedText += input[i] + '.';
    rowCount++;
    
    if(rowCount == 3 || i == input.length -1){
      let paragraph = document.createElement('p');
      paragraph.innerText = formattedText;
      output.appendChild(paragraph);
      formattedText ='';
      rowCount = 0;
    }
  }
}