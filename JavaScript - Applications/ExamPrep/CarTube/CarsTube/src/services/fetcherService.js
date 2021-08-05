import authService from "./authService.js";

const baseUrl = 'http://localhost:3030/data/cars';
//all erros handled elsewhere
async function getAll(){
    let res = await fetch(`${baseUrl}?sortBy=_createdOn%20desc`);
    return await res.json();
}
async function getSingle(id){
    let res = await fetch(`${baseUrl}/${id}`);
    return await res.json();
}
async function create(obj){
    let {accessToken} = authService.getUser();
    let res = await fetch(`${baseUrl}`,{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(obj)
    });
}
async function update(id,obj){
    let {accessToken} = authService.getUser();
    let res = await fetch(`${baseUrl}/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(obj)
    });
}
async function del(id){
    let {accessToken} = authService.getUser();
    let res = await fetch(`${baseUrl}/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json',
            'X-Authorization': accessToken
        }
    });
}
async function getByOwner(userId){
    let res = await fetch(`${baseUrl}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    return await res.json();
}
async function getByYear(year){
    let res = await fetch(`${baseUrl}?where=year%3D${year}`);
    return await res.json();
}
async function getByOwnerDesc(userId){
    let res = await fetch(`${baseUrl}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    return await res.json();
}
export default {
    getAll,
    getSingle,
    create,
    update,
    del,
    getByOwner,
    getByOwnerDesc,
    getByYear
}