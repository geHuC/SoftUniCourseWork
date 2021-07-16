import createElement from "./createElement.js";

async function createPostPage(postId){
    let postResponse = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${postId}`);
    let postData = await postResponse.json();
    //"where" doesn't work on the jsonstore part of the server
    let commentsResponse = await fetch (`http://localhost:3030/jsonstore/collections/myboard/comments/`);
    let comments = await commentsResponse.json();

    let container = createElement('div','','post-view theme-content');

    container.appendChild(createPostTitle(postData));

    let commentDiv = createElement('div','','comment', container);
    commentDiv.appendChild(createCommentHeader(postData));

    let commentSection = createElement('div','','', commentDiv);
    commentSection.id = 'user-comment';    
    Object.values(comments).filter(x => x.postId === postId)
        .forEach(c => commentSection.appendChild(createUserComment(c)));

    container.appendChild(createCommentForm(postId));

    return container;
}
function createPostTitle(postData){

    let container = new DocumentFragment();
    let themeTitle = createElement('div','','theme-title',container);
    let themeNameWrapper = createElement('div','','theme-name-wrapper',themeTitle);
    let themeName = createElement('div','','theme-name',themeNameWrapper);
    createElement('h2',postData.topicName,'',themeName);
    return container;
}
function createCommentForm(postId){
    let answerCommentDiv = createElement('div','','answer-comment');
    //No idea why we need currentUser as we don't log in anywhere maybe just remnants from the old course?
    let p = createElement('p','','',answerCommentDiv);
    createElement('span','currentUser','',p);
    p.appendChild(document.createTextNode(' comment:'));
    let answerDiv = createElement('div','','answer',answerCommentDiv);
    let form = createElement('form','','',answerDiv);
    form.dataset.postId = postId;
    let textArea = createElement('textarea','','',form);
    textArea.name = 'postText';
    textArea.id = 'comment';
    textArea.cols = '30';
    textArea.rows = '10';

    let div = createElement('div','','',form);
    let label =createElement('label','Username','',div);
    createElement('span','*','red',label);
    let userInput = createElement('input','','',div);
    userInput.name = 'username';
    userInput.type = 'text';
    userInput.id = 'username';
    createElement('button','Post','',form);
    form.addEventListener('submit', newCommentSubmissionHadler);
    return answerCommentDiv;
}
function newCommentSubmissionHadler(e){
    e.preventDefault() //stop the form from making http req
    let formData = new FormData(e.target);
    let username = formData.get('username');
    let postText = formData.get('postText');
    let postId = e.target.dataset.postId;
    //Shown in us time in the examples!
    let dateTime = new Date().toLocaleString('en-US');
    if(username.trim() === '' || postText.trim() === ''){
        console.log('Fill both fields');
        return;
    }
    let commentObject = {
        username,
        postText,
        postId,
        dateTime
    }

    submitCommentToServer(commentObject);
    e.target.reset();
}
function submitCommentToServer(comment){
    console.log('called');
    fetch('http://localhost:3030/jsonstore/collections/myboard/comments/',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(comment)
    })
    .then(res => res.json())
    .then(data => document.querySelector('#user-comment').appendChild(createUserComment(data)))
    .catch(e => console.error(e));
}
function createUserComment(comment){
    let wraper = createElement('div','','topic-name-wrapper');
    let nameDiv = createElement('div','','topic-name',wraper);
    let headP = createElement('p','','',nameDiv);
    createElement('strong',comment.username,'',headP);
    headP.appendChild(document.createTextNode(' commented on '));
    createElement('time',comment.dateTime,'',headP);
    let postDiv = createElement('div','','post-content',nameDiv);
    createElement('p',comment.postText,'',postDiv);
    
    return wraper;
}


function createCommentHeader(postData){
    let headerDiv = createElement('div','','header');
    let avatarImg = createElement('img','','',headerDiv);
    avatarImg.src = './static/profile.png';
    avatarImg.alt = 'avatar';
    let p = createElement('p','','',headerDiv);
    createElement('span',postData.username,'',p);
    p.appendChild(document.createTextNode(' posted on '));
    createElement('time',postData.dateTime.replace('T', ' ').substring(0,19),'',p);
    createElement('p',postData.postText,'post-content',headerDiv);
    return headerDiv;
}
export default createPostPage;