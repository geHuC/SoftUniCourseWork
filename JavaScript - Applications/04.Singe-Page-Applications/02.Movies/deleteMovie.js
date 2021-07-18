import changeView from "./changeView.js";
import fetcher from "./fetcher.js";

async function deleteMovie(e){
    const movieId = e.target.dataset.movieId;
    await fetcher.deleteMovie(movieId);
    changeView('home');
}

export default deleteMovie;