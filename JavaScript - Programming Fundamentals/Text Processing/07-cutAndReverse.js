function solve(input) {
    const half = Math.ceil(input.length / 2);
    const firstHalf = input.split('').slice(0, half).reverse().join('');
    const secondHalf = input.split('').slice(-half).reverse().join('');
    console.log(`${firstHalf}\n${secondHalf}`);
}

//Test Cases
solve('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('\n-----------------\n');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');