import deleteMovie from "./deleteMovie.js";
import fillEditMovie from "./fillEditMovie.js";
import fetcher from "./fetcher.js";

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

    if(movieData._ownerId === localStorage.getItem('userId')){
        deleteBtn.classList.remove('hidden');
        deleteBtn.dataset.movieId = id;
        deleteBtn.addEventListener('click', deleteMovie);
        editBtn.classList.remove('hidden');
        editBtn.dataset.movieId = id;
        editBtn.addEventListener('click', fillEditMovie);
        let likesCount = await fetcher.getLikesCount(id);
        likeSpan.textContent = `Likes ${likesCount}`;
    }
}

export default showSingleMovie;