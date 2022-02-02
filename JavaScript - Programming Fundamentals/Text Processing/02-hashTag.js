function solve(input) {
    const words = input.match(/([#])[A-Za-z]+/g).map(x=> x.substring(1)).join('\n') ;
    console.log(words);
}

//Test Cases
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
console.log('\n-----------------\n');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');