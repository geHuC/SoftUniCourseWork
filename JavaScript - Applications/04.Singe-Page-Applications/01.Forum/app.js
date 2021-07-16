//No idea really what the app should do

import createElement from "./createElement.js";
import createPostPage from "./createPostPage.js";

// Dom elements
const createPostForm = document.querySelector('#create-post');
const postBtn = createPostForm.querySelector('.public');
const cancelBtn = createPostForm.querySelector('.cancel');
const topicContainer = document.querySelector('.topic-container');
const container = document.querySelector('.container');
const homeBtn = document.querySelector('.homeBtn');
const homeView = document.querySelector('.home-view');
//Add event listners
postBtn.addEventListener('click', createNewPost);
cancelBtn.addEventListener('click', cancelNewPost);
topicContainer.addEventListener('click',topicContainerClickHandler);
homeBtn.addEventListener('click', homeBtnHandler);
//StartUp function calls
appendExistingPostsToDom()

//Functions
function cancelNewPost(e){
    e.preventDefault(); //stop the form from subming http req
    createPostForm.reset();
}

function createNewPost(e){  
    e.preventDefault(); 
    // i know i already have it as a const
    const form = e.target.parentElement.parentElement;
    //stop the form from subming http req
    clearErrorStyling(form);
    if(!validateFormData(form)) return; // return if validation fails
    let formData = new FormData(form);
    let topicName = formData.get('topicName');
    let username = formData.get('username');
    let postText = formData.get('postText');
    //Working with dates is a PTA
    let dateTime = new Date(); // Will be converting later again becase it is in 3 different formats in the Doc so I'll use all 3 :D

    let postData = {
        topicName,
        username,
        postText,
        dateTime
    }

    sendPostToServer(postData);
    form.reset();
}
function sendPostToServer(data){
    fetch('http://localhost:3030/jsonstore/collections/myboard/posts',{
        method: 'POST',
        headers: {
            'Content-Type' :'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(obj => appendNewPostToDom(obj))
    .catch(e => console.error(e));
}

function clearErrorStyling(container){
    container.querySelectorAll('.error').forEach(x => x.classList.remove('error'));
}

function validateFormData(form){
    //gonna color borders that's why i need the element otherwise would be miles easier with form data
    let titleElement = form.querySelector('#topicName');
    let usernameElement = form.querySelector('#username');
    let postTextElement = form.querySelector('#postText');

    let valid = true; // start assuming all results are valid
    if(!validateText(titleElement)) valid = false;
    if(!validateText(usernameElement)) valid = false;
    if(!validateText(postTextElement)) valid = false;

    function validateText(x){ // ugly ugly ugly
        if(x.value.trim() === ''){
            x.classList.add('error');
            return false;
        }
        return true;
    }
    return valid;
}
function appendExistingPostsToDom(){
    fetch('http://localhost:3030/jsonstore/collections/myboard/posts')
    .then(res => res.json())
    .then(data =>{
        let fragment = new DocumentFragment();
        Object.keys(data).forEach(x => fragment.appendChild(createPostCard(data[x])));
        topicContainer.appendChild(fragment);
    })
    .catch(e => console.error(e));
}
function appendNewPostToDom(post){
    topicContainer.appendChild(createPostCard(post));
}
function createPostCard(post){
    let nameWraperDiv = createElement('div','','topic-name-wrapper');
    let topicNameDiv = createElement('div','','topic-name',nameWraperDiv);
    let a = createElement('a','','normal',topicNameDiv);
    a.href = '#';
    a.dataset.id = post._id;
    let h2 = createElement('h2', post.topicName, 'clickable', a);
    h2.dataset.id = post._id;
    let columnsDiv = createElement('div','','columns',topicNameDiv);
    let emptyDiv = createElement('div','','',columnsDiv);
    let dateP = createElement('p','Date: ','',emptyDiv);
    createElement('time',post.dateTime,'',dateP);
    let nickNameDiv = createElement('div','','nick-name',emptyDiv);
    let usernameP = createElement('p','Username: ','',nickNameDiv);
    createElement('span',post.username,'',usernameP);

    return nameWraperDiv;

}

async function topicContainerClickHandler(e){
    e.preventDefault(); //stops the link from relaoding
    if(!e.target.classList.contains('clickable')){ //since it is not a button had to add helper class
        return;
    }
    let postPage = await createPostPage(e.target.dataset.id);
    homeView.classList.add('hidden');
    homeBtn.classList.add('post-view-mode');
    container.appendChild(postPage);
}

function homeBtnHandler(e){
    e.preventDefault();
    if(!e.target.classList.contains('post-view-mode')){
        return;
    }
    document.querySelector('.post-view').remove();
    homeView.classList.remove('hidden');   
    homeBtn.classList.remove('post-view-mode');
}
