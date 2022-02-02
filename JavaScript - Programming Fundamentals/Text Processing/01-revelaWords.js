function solve(input, templates) {
    const words = input.split(', ');
    words.forEach(x => templates = templates.replace(('*'.repeat(x.length)), x));
    console.log(templates);
}

//Test Cases
solve('great', 'softuni is ***** place for learning new programming languages');
console.log('\n-----------------\n');
solve('great, learning', 'softuni is ***** place for ******** new programming languages');