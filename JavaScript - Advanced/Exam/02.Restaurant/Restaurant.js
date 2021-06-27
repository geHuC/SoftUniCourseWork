class Restaurant{
    constructor(budgetMoney){
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
    loadProducts(products) {
        let currentActions = [];
        for (const product of products) {
            let [name,quantity,price] = product.split(' ');
            if(Number(price) <= this.budgetMoney){
                if(!this.stockProducts.hasOwnProperty(name)){
                    this.stockProducts[name] = 0;
                }
                this.stockProducts[name] += Number(quantity);
                this.budgetMoney -= price;
                currentActions.push(`Successfully loaded ${quantity} ${name}`);
                continue;
            }
            currentActions.push(`There was not enough money to load ${quantity} ${name}`);
        }
        let toReturn = currentActions.join('\n')
        this.history = this.history.concat(currentActions);
        return toReturn;
    }
    addToMenu(name, products, price){
        if(this.menu.hasOwnProperty(name)){
            return `The ${name} is already in the our menu, try something different.`;
        }
        let meal = {};
        meal.name = name;
        let ingredients = {};
        for (const product of products) {
            let [name,quantity] = product.split(' ');
            ingredients[name] = Number(quantity);
        }
        meal.ingredients = ingredients;
        meal.price = price;
        this.menu[name] = meal;
        if(Object.keys(this.menu).length ===1){
           return `Great idea! Now with the ${name} we have 1 meal in the menu, other ideas?`
        }
        return `Great idea! Now with the ${name} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
    }
    showTheMenu(){
        let toReturn = [];
        for (const meal of Object.keys(this.menu)) {
            toReturn.push(`${meal} - \$ ${this.menu[meal].price}`);
        }
        if(toReturn.length === 0){
            return "Our menu is not ready yet, please come later...";
        }
        return toReturn.join('\n');
    }
    makeTheOrder(meal){
        if(!this.menu.hasOwnProperty(meal)){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        let haveNeedProducts = true;
        for (const ingredient of Object.keys(this.menu[meal].ingredients)) {
            if(!this.stockProducts.hasOwnProperty(ingredient) || this.stockProducts[ingredient] < this.menu[meal].ingredients[ingredient]){
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        }
        for (const ingredient of Object.keys(this.menu[meal].ingredients)) {
            this.stockProducts[ingredient] -= this.menu[meal].ingredients[ingredient];
            }
        this.budgetMoney += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
        }


    }



//Test Cases
// let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.showTheMenu());
let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));


