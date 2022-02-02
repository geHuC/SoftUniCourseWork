function solve(input) {
    console.log(input.match(/[A-Z][a-z0-9]+/g).join(', '));
}

//Test Cases
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log('\n-----------------\n');
solve('HoldTheDoor');
console.log('\n-----------------\n');
solve('ThisIsSoAnnoyingToDo');