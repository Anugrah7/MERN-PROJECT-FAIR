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

//
