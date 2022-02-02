function solve(input) {
    const employees = input.map(x => {
        let [town, latitude, longitude] = x.split(' | ');
        return { town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2) }
    });
    employees.forEach(x => console.log(x));
}

//Test Cases
solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
console.log('\n-----------------\n');
solve(['Plovdiv | 136.45 | 812.575']);