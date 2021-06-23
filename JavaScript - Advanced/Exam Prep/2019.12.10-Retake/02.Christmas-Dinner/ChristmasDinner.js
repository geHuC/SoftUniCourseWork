class ChristmasDinner {
    constructor(budget){
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }
    get budget(){
        return this._budget;
    }
    set budget(value){
        if(value <0){
            throw new Error("The budget cannot be a negative number");
        }
        this._budget = value;
    }
    shopping(input){
        let [product,price] = input;
        if(price > this.budget){
            throw new Error("Not enough money to buy this product");
        }
        this.products.push(product);
        this.budget -= price;
        return `You have successfully bought ${product}!`;
    }
    recipes(recipe){
        recipe.productsList.forEach(x => {
            if(!this.products.includes(x)){
                throw new Error("We do not have this product");
            }
        });
        this.dishes.push(recipe);
        return `${recipe.recipeName} has been successfully cooked!`;
    }
    inviteGuests(name,dish){
        let currentDish = this.dishes.filter(x => x.recipeName === dish);
        if(!currentDish[0]){
           throw new Error("We do not have this dish"); 
        }
        if(this.guests.hasOwnProperty(name)){
            throw new Error("This guest has already been invited"); 
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;

    }
    showAttendance(){
        let toReturn = [];
        Object.keys(this.guests).forEach(x => {
            let currentDish = this.dishes.filter(d => d.recipeName === this.guests[x]);
            toReturn.push(`${x} will eat ${this.guests[x]}, which consists of ${currentDish[0].productsList.join(', ')}`);
        })
        return toReturn.join('\n');
    }

}

//test cases
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
//dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
