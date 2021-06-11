function calculator() {
    let selector1 = undefined;
    let selector2 = undefined;
    let resultSelector = undefined;
    
    return {
        init:(s1,s2,result) =>{
            selector1 = document.querySelector(s1);
            selector2 = document.querySelector(s2);
            resultSelector = document.querySelector(result);
        },
        add: () => {
            resultSelector.value = Number(selector1.value) + Number(selector2.value);
        },
        subtract: () => {   
            resultSelector.value = Number(selector1.value) - Number(selector2.value);
        }
    };
}

//Test Cases
const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 
console.log(calculate);




