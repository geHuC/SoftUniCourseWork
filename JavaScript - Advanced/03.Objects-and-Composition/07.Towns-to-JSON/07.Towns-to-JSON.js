function townsToJSON(input){
    let towns = [];
    for (let i = 1; i < input.length; i++) {
        let [name,lat,long] = input[i].split('|').filter(Boolean).map(x => x.trim());
        towns.push({'Town':name,
        'Latitude':+Number(lat).toFixed(2),
        'Longitude':+Number(long).toFixed(2)});
    }
    return JSON.stringify(towns);
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));
console.log(townsToJSON(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
));