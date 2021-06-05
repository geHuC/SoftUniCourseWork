function generateReport() {
    const headings = Array.from( document.querySelectorAll('thead input'));
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const output = document.getElementById('output');
    const keys = headings.map(x => x.name);
    let data = [];
    let columnIndexes = [];
    for (let i = 0; i < headings.length; i++) {
        if(headings[i].checked){
            columnIndexes.push(i)
        }
    }
    for (const row of rows) {
        let cols = Array.from(row.querySelectorAll('td'));
        let obj = {};
        columnIndexes.forEach( i => obj[keys[i]] = cols[i].textContent);
        data.push(obj);
    }
    output.textContent = JSON.stringify(data);
}