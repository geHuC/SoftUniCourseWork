import fetcher from "./fetcher.js";

async function showMovies(){
    let movies = await fetcher.getAllMovies();
    let template = document.querySelector('.single-movie-card');
    let fragment = new DocumentFragment();

    for (const movie of movies) {
        let clone = template.cloneNode(true);
        clone.classList.remove('hidden');
        clone.querySelector('.card-title').textContent = movie.title;
        clone.querySelector('.card-img-top').src = movie.img;
        clone.querySelector('.btn').dataset.movieId = movie._id;
        fragment.appendChild(clone);
    }
    template.parentElement.appendChild(fragment);
}

export default showMovies;