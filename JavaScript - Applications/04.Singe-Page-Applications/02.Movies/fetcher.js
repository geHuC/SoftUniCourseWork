const baseUrl = 'http://localhost:3030';
async function getAllMovies(){
    let res = await fetch(`${baseUrl}/data/movies`)
    return await res.json();
}

export default {
    getAllMovies
}