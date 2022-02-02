function solve(input) {
    let storage = {};
    input.forEach(x => {
        const [country, city, price] = x.split(' > ');
        storage[country] ? null : storage[country] = {};
        storage[country][city] ? storage[country][city] < Number(price) ? null : storage[country][city] = Number(price) : storage[country][city] = Number(price);
    })
    Object.keys(storage).sort((a, b) => a.localeCompare(b)).forEach(country => {
        let toPrint = `${country} ->`;
        Object.keys(storage[country]).sort((a, b) => storage[country][a] - storage[country][b]).forEach(city => {
            toPrint += ` ${city} -> ${storage[country][city]}`;
        })
        console.log(toPrint);
    })
}

//Test Cases
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);
console.log('\n-----------------\n');
solve([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);