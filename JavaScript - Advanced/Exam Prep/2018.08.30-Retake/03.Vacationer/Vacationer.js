class Vacationer {
    constructor (fullName ,creditCard ){
        if(fullName.length !== 3){
            throw new Error("Name must include first name, middle name and last name");
        }
        fullName.forEach(name => {
            if(!/^[A-Z][a-z]+$/.test(name)){
                throw new Error("Invalid full name");
            }
        });
        this.fullName = {
            firstName: fullName[0], 
            middleName: fullName[1], 
            lastName: fullName[2]
        };
        let cc = {}
        if(!creditCard){
            cc = {
                cardNumber: 1111,
                expirationDate: '',
                securityNumber: 111
            }
        }else{
            if((typeof creditCard[0]) !=='number' || (typeof creditCard[2]) !=='number' || (typeof creditCard[1]) !== 'string'){
                throw new Error();
            }
            cc = {
                cardNumber: creditCard[0],
                expirationDate: creditCard[1],
                securityNumber: creditCard[2]
            }
        }
        this.creditCard = cc;
        this.idNumber = this.generateIDNumber();
        this.wishList = [];
    }
    generateIDNumber(){
        let str = (231 * this.fullName.firstName.charCodeAt(0) + 139 * this.fullName.middleName.length).toString();
        if(/[aeoiu]$/.test(this.fullName.lastName)){
            str += '8'
            return str;
        }
        str += '7';
        return str;
    }
    addCreditCardInfo(input) {
       let cc = this._validateCreditCard(input);
       this.creditCard = cc;
    }
    _validateCreditCard(input){
        if(input.length < 3){
            throw new Error("Missing credit card information");
        }
        if(input[0].trim() == '' ||
            input[2].trim() == '' ||
            isNaN(Number(input[0])) ||
            isNaN(Number(input[2]))){
                
                throw new Error('Invalid credit card details')
            }
        let cc ={}
        cc.cardNumber = Number(input[0]);
        cc.expirationDate = input[1];
        cc.securityNumber = Number(input[2]);
        return cc;
    }
    addDestinationToWishList(destination) {
        if(this.wishList.includes(destination)){
            throw new Error("Destination already exists in wishlist");
        }
        this.wishList.push(destination);
        this.wishList.sort((a,b) => a.length - b.length);
    }
    getVacationerInfo(){
        let toReturn = [`Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}`];
        toReturn.push(`ID Number: ${this.idNumber}`);
        toReturn.push(`Wishlist:`);
        if(this.wishList.length >0){
            toReturn.push(this.wishList.join(', '));
        }else{
            toReturn.push('empty');
        }
        toReturn.push('Credit Card:');
        toReturn.push(`Card Number: ${this.creditCard.cardNumber}`);
        toReturn.push(`Expiration Date: ${this.creditCard.expirationDate}`);
        toReturn.push(`Security Number: ${this.creditCard.securityNumber}`);
        return toReturn.join('\n');
    }
}

//Test cases
// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], 
[123456789, "10/01/2018", 777]);
new Vacationer(["Vania", "Ivanova", "Zhivk0va"]);
// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());

