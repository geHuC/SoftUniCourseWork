function solution(arr,sortCriteria){
    let ticketArray = [];
    
    class Ticket {
        constructor(destination,price,status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    arr.forEach(x => {
        let [destination,price,status] = x.split('|');
        ticketArray.push(new Ticket(destination,price,status));
    });
    switch(sortCriteria){
        case 'price': return ticketArray.sort((a,b) => a[sortCriteria] - b[sortCriteria]);
        default: return ticketArray.sort((a,b) => a[sortCriteria].localeCompare(b[sortCriteria]));
    }
    
}

//Test Cases
console.log(solution(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
))
console.log('-------------------------------------');
console.log(solution(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
))