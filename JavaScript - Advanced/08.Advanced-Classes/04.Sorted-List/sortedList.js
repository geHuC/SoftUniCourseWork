class List {
    constructor() {
        this.collection = [];
        this.size = 0; // judge wanst a property, not a getter 
    }

    add(num) {
        this.collection.push(num);
        this.collection.sort((a, b) => a - b);
        this.size += 1;
    }

    remove(index) {
        if (index < 0 || index >= this.collection.length) {
            throw new Error('invalid index!')
        }
        this.collection.splice(index, 1);
        this.size -= 1;
    }

    get(index) {
        if (index < 0 || index >= this.collection.length) {
            throw new Error('invalid index!')
        }
        return this.collection[index];
    }
}

//Test Cases
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
