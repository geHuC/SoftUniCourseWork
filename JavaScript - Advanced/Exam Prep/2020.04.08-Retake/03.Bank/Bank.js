class Bank {
    constructor(bankName){
        this._bankName = bankName;
        this.allCustomers = [];
    }
    newCustomer(customer){
        this.allCustomers.forEach(x => {
            if (x.personalId === customer.personalId){
                throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
            }
        });
        this.allCustomers.push(customer);
        return(customer);
    }
    depositMoney(personalId,amount){
        let customer = this.allCustomers.find(x => x.personalId === personalId);
        if(!customer){
            throw new Error('We have no customer with this ID!');
        }
        if(!customer.hasOwnProperty('totalMoney')){
            customer.totalMoney = 0;
        }
        customer.totalMoney += amount;
        if(!customer.hasOwnProperty('transactionHistory')){
            customer.transactionHistory = [];
        }
        customer.transactionHistory.push(`${customer.transactionHistory.length +1}. ${customer.firstName} ${customer.lastName} made deposit of ${amount}\$!`);
        return `${customer.totalMoney}\$`;
    }
    withdrawMoney(personalId, amount){
        let customer = this.allCustomers.find(x => x.personalId === personalId);
        if(!customer){
            throw new Error('We have no customer with this ID!');
        }
        if(amount > customer.totalMoney){
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }
        customer.transactionHistory.push(`${customer.transactionHistory.length +1}. ${customer.firstName} ${customer.lastName} withdrew ${amount}\$!`);
        customer.totalMoney -= amount;
        return `${customer.totalMoney}\$`;
    }
    customerInfo(personalId){
        let customer = this.allCustomers.find(x => x.personalId === personalId);
        if(!customer){
            throw new Error('We have no customer with this ID!');
        }
        let toReturn = [];
        toReturn.push(`Bank name: ${this._bankName}`);
        toReturn.push(`Customer name: ${customer.firstName} ${customer.lastName}`);
        toReturn.push(`Customer ID: ${customer.personalId}`);
        toReturn.push(`Total Money: ${customer.totalMoney}\$`);
        toReturn.push('Transactions:');
        for (let i = customer.transactionHistory.length -1 ; i >= 0; i--) {
            toReturn.push(customer.transactionHistory[i]);
        }
        return toReturn.join('\n');
    }
}


//test cases
let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

