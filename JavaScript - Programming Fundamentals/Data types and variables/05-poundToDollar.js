function converter(pounds) {
    const excRate = 1.31;
    console.log((pounds * excRate).toFixed(3));
}

//Test Cases
converter(80);
console.log('\n-----------------\n');
converter(39);