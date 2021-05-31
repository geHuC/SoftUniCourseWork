function createSortedList(){
    return {
        data:[],
        size:0,
        add: function(a){
            this.data.push(a);
            this.size++;
            this.data.sort((a,b) => a-b);
        },
        remove: function(index){
            if(index >= 0 && index < this.size){
            this.data.splice(index,1);
            this.size--;
        } 
        },
        get: function(index){
            if(index >= 0 && index < this.size){
                return this.data[index];
            }
        }
    }

}

//Test Cases
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
