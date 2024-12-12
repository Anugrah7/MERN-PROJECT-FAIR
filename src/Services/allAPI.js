import commonAPI from "./commonAPI.JS";
import SERVER_BASE_URL from "./serverUrl";

//registerAPI

export const registerAPI =  async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/register`,reqBody)
}
    
//login

export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/login`,reqBody)
}

//add-project
export const addProjectAPI = async (reqBody,reqHeader)=>{
    return await commonAPI ("POST",`${SERVER_BASE_URL}/add-project`,reqBody,reqHeader)
}
//home-project
export const homeProjectAPI = async ()=>{
    return await commonAPI ("GET",`${SERVER_BASE_URL}/home-projects`,{})
}
//user-project
export const userProjectAPI = async (reqHeader)=>{
    return await commonAPI ("GET",`${SERVER_BASE_URL}/user-projects`,{},reqHeader)
}
//all-project
export const allProjectAPI = async (reqHeader,searchKey)=>{
    //query parameter for url - ?search=${searchKey} & query stored in 'search'
    return await commonAPI ("GET",`${SERVER_BASE_URL}/all-projects?search=${searchKey}`,{},reqHeader)
}
//projects/675286f3f6f8cdeb7a59d0da/edit
export const updateProjectAPI = async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_BASE_URL}/projects/${id}/edit`,reqBody,reqHeader)
}

//projects/:id/remove
export const deleteProjectAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_BASE_URL}/projects/${id}/remove`,{},reqHeader)
}

//user/edit 

export const updateUserAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_BASE_URL}/user/edit`,reqBody,reqHeader)
}