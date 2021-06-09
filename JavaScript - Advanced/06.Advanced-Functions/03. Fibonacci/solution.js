function getFibonator(){
    let a = undefined;
    let b = 1;
    let fibGenerator = () =>{
        if(a === undefined){
            a = 0;
            return 1;
        }
        let c = a + b;
        a = b;
        b = c;
        return c;
    }
    return fibGenerator;
}

//Test Cases
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
