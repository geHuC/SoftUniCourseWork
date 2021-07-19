import fetcher from "./fetcher.js";

async function hasLiked(movieId){
    //no idea how to use pagination so don't likea movie more than 10 time and should be alright :D]
    let like = await fetcher.getSingleUserLikes(movieId);
    console.log(like);
    if(like.length > 0){
        console.log('bigger');
        return true;
    }

    return false;
}

export default hasLiked;