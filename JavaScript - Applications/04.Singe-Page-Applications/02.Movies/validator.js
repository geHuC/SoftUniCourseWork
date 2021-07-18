import errorStyling from "./errorStyling.js";

function inputTextNodeValue(element){
    let value = element.value;
    if(value.trim() === ''){
        errorStyling.create('Please enter a title',element);
        return false;
    }
    return true;
}
function textAreaNodeValue(element){
    let value = element.value;
    if(value.trim() === ''){
        errorStyling.create('Please enter a movie description',element);
        return false;
    }
    return true;
}
function urlNodeValue(element){
    let value = element.value;
    //got the regex from stackOverflow
    let regEx = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/

    if(value.trim() === ''){
        errorStyling.create('Please enter a poster URL',element);
        return false;
    }
    if(!regEx.test(value)){
        errorStyling.create('Must be valid URL',element);
        return false;
    }
    return true;
}

export default {
    inputTextNodeValue,
    textAreaNodeValue,
    urlNodeValue
}