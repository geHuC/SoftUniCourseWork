function solve(input) {
    let movies = {};
    input.forEach(x => {
        if (x.includes('addMovie')) {
            let [z, name] = x.split('addMovie ');
            name ? movies[name] = { name } : null;
        } else if (x.includes('directedBy')) {
            let [name, director] = x.split(' directedBy ');
            movies[name] ? movies[name].director = director : null;
        } else if (x.includes('onDate')) {
            let [name, date] = x.split(' onDate ');
            movies[name] ? movies[name].date = date : null;
        }
    });
    Object.entries(movies).forEach(x => x[1].director && x[1].date ? console.log(JSON.stringify(x[1])) : null);
}

//Test Cases
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
console.log('\n-----------------\n');
solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);