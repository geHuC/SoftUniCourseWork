function validityCheker(x1,y1,x2,y2){

    internalFunction(x1,y1,0,0);
    internalFunction(x2,y2,0,0);
    internalFunction(x1,y1,x2,y2);

    function internalFunction(x1,y1,x2,y2){
        let distance = Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
        if (Number.isInteger(distance)){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }else{         
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }      
    }
}


//Test Cases
validityCheker(3,0,0,4);
validityCheker(2,1,1,1);
