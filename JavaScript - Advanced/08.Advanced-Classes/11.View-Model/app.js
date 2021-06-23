class Textbox {
    constructor(selector,regex){
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;
        Array.from(this._elements).forEach(x => x.addEventListener('change', (e) => this.value = e.target.value));
    }
    get value(){
        return this._elements[0].value;
    }
    set value(data){
        for (const iterator of this._elements) {
            iterator.value = data;
        }
    }
    get elements(){
        return this._elements;
    }
    isValid(){
        return !this._invalidSymbols.test(this.elements[0].value)
    }
}

//Test Cases
let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
