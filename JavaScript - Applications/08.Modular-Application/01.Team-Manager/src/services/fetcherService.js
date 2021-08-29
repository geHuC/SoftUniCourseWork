import authService from "./authService.js";

const baseUrl = 'http://localhost:3030/data/teams';
const membmerUrl = 'http://localhost:3030/data/members';
//all erros handled elsewhere
async function getAll(){
    let res = await fetch(`${baseUrl}`);
    return await res.json();
}
async function getSinle(id){
    let res = await fetch(`${baseUrl}/${id}`);
    return await res.json();
}
async function getMembers(teamIds){
    let strToEncode = ` IN (${teamIds.join(',')}) AND status="member"` 
    let res = await fetch(`${membmerUrl}?where=teamId${encodeURIComponent(strToEncode)}`);
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
    return await res.json();
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
    let res = await fetch(`${baseUrl}?where=_ownerId%3D%22${userId}%22`);
    return await res.json();
}
export default {
    getAll,
    getSinle,
    create,
    update,
    del,
    getByOwner,
    getMembers
}