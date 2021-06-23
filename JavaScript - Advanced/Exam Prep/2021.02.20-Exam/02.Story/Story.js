class Story{
    constructor(title,creator){
        this.title = title;
        this.creator = creator;
        this._comments = {};
        this._likes = [];
    }
    get likes(){
        if(this._likes.length === 0){
            return `${this.title} has 0 likes`;
        }
        if(this._likes.length === 1){
            return `${this._likes[0]} likes this story!`
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }
    like(username){
        if(this._likes.includes(username)){
            throw new Error('You can\'t like the same story twice!');
        }
        if(this.creator === username){
            throw new Error('You can\'t like your own story!');
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }
    dislike(username){
        if(!this._likes.includes(username)){
            throw new Error('You can\'t dislike this story!');
        }
        this._likes = this._likes.filter((x) =>  { return x != username; });
        return `${username} disliked ${this.title}`
    }
    comment(username,content,id){
        let comment = {};
        if(id === undefined|| !this._comments.hasOwnProperty(id)  ){
            comment.id = Object.keys(this._comments).length +1;
            comment.username = username;
            comment.content = content;
            comment.replies = [];
            this._comments[comment.id] = comment;
            return `${username} commented on ${this.title}`;
        }

        comment.id = `${id}.${this._comments[id].replies.length +1}`;
        comment.username = username;
        comment.content = content;
        this._comments[id].replies.push(comment);
        return 'You replied successfully';
    }
    toString(sortingType){
        let toReturn = [];
        toReturn.push(`Title: ${this.title}`);
        toReturn.push(`Creator: ${this.creator}`);
        toReturn.push(`Likes: ${this._likes.length}`);
        toReturn.push('Comments:');
        let commentsArray = Object.values(this._comments);
        if(sortingType ==='desc'){
            commentsArray.sort((a,b) => b.id - a.id);
            commentsArray.forEach(x => x.replies.sort((a,b)=> b.id - a.id));
        }
        if(sortingType ==='asc'){
            commentsArray.sort((a,b) => a.id - b.id);
            commentsArray.forEach(x => x.replies.sort((a,b)=> a.id - b.id));
        }
        if(sortingType === 'username'){
            commentsArray.sort((a,b) => a.username.localeCompare(b.username));
            commentsArray.forEach(x => x.replies.sort((a,b)=> a.username.localeCompare(b.username)));
        }
        for (const comment of commentsArray) {
            toReturn.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
            comment.replies.forEach(x => {
                toReturn.push(`--- ${x.id}. ${x.username}: ${x.content}`)
            });
        }
        return toReturn.join('\n');
    }
}

//Test Cases
let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
