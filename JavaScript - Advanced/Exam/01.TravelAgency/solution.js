window.addEventListener('load', solution);

function solution() {
const submitBtn = document.querySelector('#submitBTN');
submitBtn.addEventListener('click', onClick);
let magicObj ={};

function onClick(e){
  let fName = document.querySelector('#fname');
  let email = document.querySelector('#email');
  let phone = document.querySelector('#phone');
  let address = document.querySelector('#address');
  let code = document.querySelector('#code');
  if(validator(fName.value)||validator(email.value)){
    return;
  }
  const infoPreview = document.querySelector('#infoPreview');
  magicObj = {
    fName: fName.value,
    email: email.value,
    phone: phone.value,
    address: address.value,
    code: code.value
  }
  createElement('li',`Full Name: ${fName.value}`,'',infoPreview);
  createElement('li',`Email: ${email.value}`,'',infoPreview);
  createElement('li',`Phone Number: ${phone.value}`,'',infoPreview);
  createElement('li',`Address: ${address.value}`,'',infoPreview);
  createElement('li',`Postal Code: ${code.value}`,'',infoPreview);

  let edit = document.querySelector('#editBTN');
  let ctn = document.querySelector('#continueBTN');
  edit.disabled = false;
  ctn.disabled = false;
  edit.addEventListener('click', editInfo);
  ctn.addEventListener('click', ctnSubmission);
  e.currentTarget.disabled = true;
  fName.value = '';
  email.value = '';
  phone.value = '';
  address.value = '';
  code.value = '';
}
function editInfo(e){
  let fName = document.querySelector('#fname');
  let email = document.querySelector('#email');
  let phone = document.querySelector('#phone');
  let address = document.querySelector('#address');
  let code = document.querySelector('#code');
  const infoPreview = document.querySelector('#infoPreview');
  fName.value = magicObj.fName;
  email.value = magicObj.email;
  phone.value = magicObj.phone;
  address.value = magicObj.address;
  code.value = magicObj.code;
  infoPreview.innerHTML = '';
  let ctn = document.querySelector('#continueBTN');
  ctn.disabled = true;
  submitBtn.disabled = false;
  e.currentTarget.disabled = true;
}
function ctnSubmission(e){
  let blockDiv = document.querySelector('#block');
  blockDiv.innerHTML = '';
  createElement('h3',"Thank you for your reservation!",'',blockDiv);
}
function validator(input){
  if(input == undefined || input.trim() == ''){
      return true;
  }
  return false;
}
function createElement(type,text,classType,appender){
  let element = document.createElement(type);
  if(text != undefined && text !=''){
      element.textContent = text;
  }
  if(classType != undefined && classType != ''){
      element.className = classType;
  }
  if(appender != undefined && appender != ''){
      appender.appendChild(element);
  }
  return element;
}
}
