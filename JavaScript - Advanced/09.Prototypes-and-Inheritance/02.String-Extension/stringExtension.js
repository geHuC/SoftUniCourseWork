(function solve() {
    
    String.prototype.ensureStart = function (str){
        if(this.startsWith(str)){
            return this;
        }
        return `${str}${this}`;
    }
    String.prototype.ensureEnd = function (str){
        if(this.endsWith(str)){
            return this;
        }
        return `${this}${str}`;
    }
    String.prototype.isEmpty = function(){
        return this.toString() === '';
    }
    String.prototype.truncate = function(n){
         if(this.length < n){
             return this;
         }

    }
    String.format = function(string, ...params){
        
    }
})();