import commonApi from "./commonApi";
import base_url from "./base_url";

export const signupApi = async(data)=>{
    return await commonApi(`${base_url}/signup`,'POST',data,'')
}

export const signinApi = async(data)=>{
    return await commonApi(`${base_url}/signin`,'POST',data,'')
}