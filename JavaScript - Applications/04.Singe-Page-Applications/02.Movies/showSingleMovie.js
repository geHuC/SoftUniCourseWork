import fetcher from "./fetcher.js";

async function showSingleMovie(id){
    const template = document.querySelector('movie-example');
    const movieData = await fetcher.getSingleMovies(id);
    console.log(movieData);
}

export default showSingleMovie;