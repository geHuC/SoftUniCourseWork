function solve() {
    const selectMenu = document.getElementById('selectMenuTo');
    const convertBtn = document.querySelector('button');
    const resultField = document.getElementById('result');
    //Works in SoftUni judge system
    //selectMenu.innerHTML = '<option value="binary">Binary</option><option value="hexadecimal">Hexadecimal</option>';
    //Doesn't work in judge but works in the browser
    selectMenu.options[0] = new Option('Binary','binary');
    selectMenu.options[1] = new Option('Hexadecimal','hexadecimal');

    convertBtn.addEventListener('click', onClick);

    function onClick(){
        let inputNumber =Number(document.getElementById('input').value);
        let numberSystem = 0;
        selectMenu.selectedIndex == 0 ? numberSystem = 2 : numberSystem = 16;
        resultField.value = inputNumber.toString(numberSystem).toUpperCase();
    }
}
