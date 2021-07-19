import deleteMovie from "./deleteMovie.js";
import fillEditMovie from "./fillEditMovie.js";
import fetcher from "./fetcher.js";
import hasLiked from "./hasLiked.js";
import isLogged from "./isLogged.js";

async function showSingleMovie(id){
    const template = document.querySelector('#movie-example');
    const movieData = await fetcher.getSingleMovies(id);
    const deleteBtn = template.querySelector('.btn-danger');
    const editBtn = template.querySelector('.btn-warning');
    const likeBtn = template.querySelector('.btn-primary');
    const likeSpan = template.querySelector('.number-likes');

    template.querySelector('.movie-title').textContent = `Movie title: ${movieData.title}`;
    template.querySelector('.img-thumbnail').src = movieData.img;
    template.querySelector('.movie-description').textContent = movieData.description;

    //pure spagetti don't read

    if(movieData._ownerId === localStorage.getItem('userId')){
        deleteBtn.classList.remove('hidden');
        deleteBtn.dataset.movieId = id;
        deleteBtn.addEventListener('click', deleteMovie);
        editBtn.classList.remove('hidden');
        editBtn.dataset.movieId = id;
        editBtn.addEventListener('click', fillEditMovie);
        let likesCount = await fetcher.getLikesCount(id);
        likeSpan.textContent = `Liked ${likesCount}`;   
        likeSpan.classList.remove('hidden');
        return;
    }
    if(isLogged()){
        if(await hasLiked(id)){
            console.log('what are you doing here');
            let likesCount = await fetcher.getLikesCount(id);
            likeSpan.textContent = `Liked ${likesCount}`;
            likeSpan.classList.remove('hidden');
            return;
        }
        likeBtn.dataset.id = id;
        likeBtn.addEventListener('click', likeMovie);
        likeBtn.classList.remove('hidden');
        
    } else {

        let likesCount = await fetcher.getLikesCount(id);
        likeSpan.textContent = `Liked ${likesCount}`;   
        likeSpan.classList.remove('hidden');
    }
    

    //this should not be here but it is the easiest way to access likesSpan
    async function likeMovie(e){
        let movieId = e.target.dataset.id;
        let userId = localStorage.getItem('userId');
        await fetcher.likeMovie({movieId,userId});
        let likesCount = await fetcher.getLikesCount(id);
        likeSpan.textContent = `Liked ${likesCount}`;
        e.target.classList.add('hidden');
        likeSpan.classList.remove('hidden');
    }
}




export default showSingleMovie;