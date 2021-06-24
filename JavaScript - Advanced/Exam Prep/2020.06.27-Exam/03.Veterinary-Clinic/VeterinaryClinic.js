class VeterinaryClinic {
    constructor (clinicName, capacity){
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = {} ;//[] ; //one of the tests needs clients to be an array code still works by treating the array as an object 
        this.totalProfit = 0;
        this.currentWorkload = 0;
    }
    newCustomer(ownerName, petName, kind, procedures){
        if(!this.clients.hasOwnProperty(ownerName)){
            this.clients[ownerName] = {};
        }
        if(this.currentWorkload === this.capacity){
            throw new Error("Sorry, we are not able to accept more patients!");
        }
        if(this.clients[ownerName][petName]){
            if(this.clients[ownerName][petName].procedures.length > 0){
                throw new Error(`This pet is already registered under ${ ownerName } name! ${ petName } is on our lists, waiting for ${ this.clients[ownerName][petName].procedures.join(', ') }.`);
            }
        }
        let pet = {name: petName, kind: kind, procedures: procedures};
        this.clients[ownerName][petName] = pet;
        this.currentWorkload++;
        return `Welcome ${ petName }!`;
    }
    onLeaving(ownerName,petName){
        if(!this.clients.hasOwnProperty(ownerName)){
            throw new Error("Sorry, there is no such client!");
        }
        if(this.clients[ownerName][petName]){
            if(this.clients[ownerName][petName].procedures.length === 0){
                throw new Error(`Sorry, there are no procedures for ${ petName }!`);
            }
        } else{
            throw new Error(`Sorry, there are no procedures for ${ petName }!`);
        };
        this.clients[ownerName][petName].procedures.forEach(x => {
            this.totalProfit += 500;
        });
        this.clients[ownerName][petName].procedures = [];
        this.currentWorkload--;
        return `Goodbye ${ petName }. Stay safe!`;
    }
    toString(){
        let toReturn = [];
        toReturn.push(`${this.clinicName} is ${Math.trunc((this.currentWorkload / this.capacity) * 100)}% busy today!`);
        toReturn.push(`Total profit: ${this.totalProfit.toFixed(2)}\$`);
        let sortedOwners = Object.keys(this.clients).sort((a,b) => a.localeCompare(b));
        for (const owner of sortedOwners) {
            let sortedPets = Object.keys(this.clients[owner]).sort((a,b) => a.localeCompare(b));
            toReturn.push(`${owner } with:`);
            for (const pet of sortedPets) {
                toReturn.push(`---${ pet } - a ${ this.clients[owner][pet].kind.toLowerCase() } that needs: ${ this.clients[owner][pet].procedures.join(', ')}`)
            }
        }
        return toReturn.join('\n');
    }
}


//test cases
let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B'])); 
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']); 
console.log(clinic.toString());



