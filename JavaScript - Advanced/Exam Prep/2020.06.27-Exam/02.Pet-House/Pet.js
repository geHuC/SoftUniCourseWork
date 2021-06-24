function solveClasses(){
    class Pet{
        constructor(owner,name){
            this.owner = owner;
            this.name = name;
            this.comments = [];
        }
        addComment(comment){
            if(this.comments.includes(comment)){
                throw new Error("This comment is already added!");
            }
            this.comments.push(comment);
            return "Comment is added.";
        }
        feed(){
            return `${this.name} is fed`;
        }
        toString(){
            let toRetunrn = [`Here is ${this.owner}'s pet ${this.name}.`];
            if(this.comments.length > 0){
                toRetunrn.push(`Special requirements: ${this.comments.join(', ')}`);
            }
            return toRetunrn.join('\n');
        }
    }
    class Cat extends Pet{
        constructor(owner, name, insideHabits, scratching ){
            super(owner,name);
            this.insideHabits = insideHabits;
            this.scratching = scratching;
        }

        feed(){
            return super.feed() +', happy and purring.'
        }
        toString(){
            let toReturn = [super.toString()];
            toReturn.push(`Main information:`);
            toReturn.push(`${this.name} is a cat with ${this.insideHabits}${this.scratching ? ", but beware of scratches." : ''}`);
            return toReturn.join('\n');
        }

    }
    class Dog extends Pet{
        constructor(owner, name, runningNeeds, trainability){
            super(owner,name);
            this.runningNeeds = runningNeeds;
            this.trainability = trainability;
        }
        feed(){
            return super.feed() +', happy and wagging tail.';
        }
        toString(){
            let toReturn = [super.toString()];
            toReturn.push(`Main information:`);
            toReturn.push(`${ this.name } is a dog with need of ${ this.runningNeeds }km running every day and ${ this.trainability } trainability.`);
            return toReturn.join('\n');
        }
    }

    return{
        Pet,
        Cat,
        Dog
    }
}
