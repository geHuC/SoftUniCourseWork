let closureObject = {};
function attachEvents() {
    const loadPostsBtn = document.querySelector('#btnLoadPosts');
    const viewPostsBtn = document.querySelector('#btnViewPost');
    loadPostsBtn.addEventListener('click',loadPostsHandler)
    viewPostsBtn.addEventListener('click',viewPostsHandler)
}
function loadPostsHandler(){
    fetch('http://localhost:3030/jsonstore/blog/posts')
    .then(response => response.json())
    .then(jsonResponse => createOptions(jsonResponse))
    .catch((e) => console.log(e));
}
function createOptions(data){
    closureObject = data;
    let posts = document.querySelector('#posts');
    for (const key of Object.keys(data)) {
        let {title} = data[key];
        let option = document.createElement('option');
        option.value = key;
        option.textContent = title;
        posts.appendChild(option);
    }
}
function viewPostsHandler(){
    let posts = document.querySelector('#posts');
    let postId = posts.value;
    console.log(postId);
    fetch('http://localhost:3030/jsonstore/blog/comments')
    .then(response => response.json())
    .then(jsonResponse => appendPostToDOM(postId,jsonResponse))
    .catch(e => console.log(e));
}
function appendPostToDOM(postId,data){
    let postTitle = document.querySelector('#post-title');
    let postBody = document.querySelector('#post-body');
    let postComments = document.querySelector('#post-comments');
    let {body,title} = closureObject[postId];
    postTitle.textContent = title;
    postBody.textContent = body;
    for (const commentId of Object.keys(data)) {
        if(postId === data[commentId].postId){
            let listItem = document.createElement('li');
            listItem.textContent = data[commentId].text;
            listItem.id = data[commentId].id;
            postComments.appendChild(listItem);
        }
    }
}
attachEvents();