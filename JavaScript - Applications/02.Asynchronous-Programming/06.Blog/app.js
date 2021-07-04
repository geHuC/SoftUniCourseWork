let closureObject = {}; // Keeping data in closure
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
    // saving the entire data in closure as we will need it later and there is no need to fetch it again
    // In case we load posts againg it will overwrite itself with the newest data
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
    //Fetching the entire comment stack everytime a post is generated 
    // If we save it to closuse we might have pulled new posts with load posts inbetween that we don't have the comments for
    fetch('http://localhost:3030/jsonstore/blog/comments')
    .then(response => response.json())
    .then(jsonResponse => appendPostToDOM(postId,jsonResponse))
    .catch(e => console.log(e));
}
function appendPostToDOM(postId,data){
    let postTitle = document.querySelector('#post-title');
    // in the notes it says get ul with this id, then in the picture they show a paragarpah with this id ¯\_(ツ)_/¯ in my sample html it is a ul
    let postBody = document.querySelector('#post-body'); 
    let postComments = document.querySelector('#post-comments');
    let {body,title} = closureObject[postId]; //destructuring the object 
    postTitle.textContent = title;
    postBody.textContent = body;
    for (const commentId of Object.keys(data)) {
        if(postId === data[commentId].postId){ //finding the comments for the current post and adding them
            let listItem = document.createElement('li');
            listItem.textContent = data[commentId].text;
            listItem.id = data[commentId].id;
            postComments.appendChild(listItem);
        }
    }
}
attachEvents();