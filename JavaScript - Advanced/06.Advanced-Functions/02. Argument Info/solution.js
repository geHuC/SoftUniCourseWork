function solve(){
    let container = {};
    for (const arg of arguments) {
        let type = typeof arg;
        if(container[type] === undefined){
            container[type] = new Array();
        }
        container[type].push(arg);
        console.log(`${type}: ${arg}`)
    }
    let sortableContainer = [];
    for (const key in container) {
        sortableContainer.push([key,container[key].length])
        //container[key].forEach(x => console.log(`${key}: ${x}`));
    }
    sortableContainer.sort((a,b) => b[1]-a[1]);
    sortableContainer.forEach(x => console.log(`${x[0]} = ${x[1]}`));
}

//Test Cases
solve('cat', 42, function () { console.log('Hello world!'); });
solve('cat', 42, function () { console.log('Hello world!'); },'dog',12);