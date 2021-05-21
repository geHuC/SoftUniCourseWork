function wordUppercase(text) {
    console.log(text.toUpperCase().match(/\w+/gim).join(', '));
 }

 //Test cases
 wordUppercase('Hi, how are you?')
 wordUppercase('hellow')