function addItem() {
    const select = document.getElementById('menu');
    const optionText = document.getElementById('newItemText');
    const optionValue = document.getElementById('newItemValue');
    let iHateJudge = document.createElement('option');
    iHateJudge.text = optionText.value;
    iHateJudge.value = optionValue.value;
    // Doesn't work in judge but works in any other browser under the sun.
    // select.appendChild(new Option(optionText.value,optionValue.value));
    select.appendChild(iHateJudge);
    optionValue.value ='';
    optionText.value ='';
}