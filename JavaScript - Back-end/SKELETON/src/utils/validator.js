function isEmail(email){
    // return /.+@+.+\.+.+/.test(email);
   return /^[A-Za-z0-9]+@+[A-Za-z0-9]+\.+[A-Za-z0-9]+$/.test(email);
}
function isEmpty(string){
    return string.trim() === '';
}
function isNumber(num){
    if(isEmpty(num)) return false;
    if(isNaN(num)) return false;
    return true;
}
function isEql(val1, val2){
    return val1 === val2;
}
function isLonger(text, length){
    return text.trim().length > length;
}
function isLongerOr(text, length){
    return text.trim().length >= length;
}
module.exports = {
    isEmail,
    isEmpty,
    isNumber,
    isEql,
    isLonger,
    isLongerOr
}