const baseUrl = 'http://localhost:3030';
// all should have try catches but no time to add it xD
async function getAllMovies(){
    let res = await fetch(`${baseUrl}/data/movies`)
    return await res.json();
}
async function getSingleMovies(id){
    let res = await fetch(`${baseUrl}/data/movies/${id}`)
    return await res.json();
}
async function postMovie(obj){
    let res = await fetch(`${baseUrl}/data/movies/`,{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'X-Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify(obj)
    });
}
async function getLikesCount(id){
    let res = await fetch(`${baseUrl}/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`)
    return res.json();
}
async function updateMovie(obj,id){
    let res = await fetch(`${baseUrl}/data/movies/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json',
            'X-Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify(obj)
    });
}
async function deleteMovie(id){
    return await fetch(`${baseUrl}/data/movies/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json',
            'X-Authorization': localStorage.getItem('token')
        },
    })
}
export default {
    getAllMovies,
    getSingleMovies,
    postMovie,
    deleteMovie,
    updateMovie,
    getLikesCount
}