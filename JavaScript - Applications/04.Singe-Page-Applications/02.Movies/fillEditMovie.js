import changeView from "./changeView.js";
import fetcher from "./fetcher.js";

async function fillEditMovie(e){
    const movieId = e.target.dataset.movieId;
    const editForm = document.querySelector('.edit-movie-form')
    let data = await fetcher.getSingleMovies(movieId);
    editForm.querySelector('input[name="title"').value = data.title;
    editForm.querySelector('textarea[name="description"').value = data.description;
    editForm.querySelector('input[name="imageUrl"').value = data.img;
    editForm.dataset.movieId = movieId;
    changeView('edit');
}

export default fillEditMovie;