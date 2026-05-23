import commonApi from "./commonApi";
import base_url from "./base_url";

export const signupApi = async(data)=>{
    return await commonApi(`${base_url}/signup`,'POST',data,'')
}

export const signinApi = async(data)=>{
    return await commonApi(`${base_url}/signin`,'POST',data,'')
}

//Google signin Api
export const googleSigninApi = async(data)=>{
    return await commonApi(`${base_url}/google-login`,'POST',data)
}

//Authorized user based APIs

//add book api
export const addBookApi = async(data)=>{
    const header = {
        "Authorization":`Token ${sessionStorage.getItem('token')}`,
        "Content-Type":"multipart/form-data"
    }
    return await commonApi(`${base_url}/add-book`,'POST',data,header)
}

//latest 4 books API
export const latestBookApi = async()=>{
    return await commonApi(`${base_url}/latest-books`,'GET',{},'')
        
}


//AllBooks API
export const allBooksApi=async(search)=>{
    const header={
        "Authorization":`Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_url}/all-books?search=${search}`,'GET',{},header)
}

//getbookbyId API
export const getBookByIdApi = async(id)=>{
     const header={
        "Authorization":`Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_url}/getbookbyid/${id}`,'GET',{},header)
}


//get user added books Api
export const getUserBooksApi = async()=>{
    const header={
        "Authorization": `Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_url}/user-books`,'GET',{},header)
}

//remove user added book Api
export const removeUserBookApi = async(id)=>{
     const header={
        "Authorization": `Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_url}/delete-books/${id}/delete`,'DELETE',{},header)
}

//user purchased book Api
export const getBoughtBooksApi = async()=>{
     const header={
        "Authorization": `Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_url}/purchased-books`,'GET',{},header)
}

//get profile API
export const getProfileApi = async()=>{
     const header={
        "Authorization": `Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_url}/get-profile`,'GET',{},header)
}

//profile update
export const profileUpdateApi = async(data)=>{
     const header = {
        "Authorization":`Token ${sessionStorage.getItem('token')}`,
        "Content-Type":"multipart/form-data"
    }
    return await commonApi(`${base_url}/profile-update`,'PUT',data,header)
}

//apply for job
export const applyJobPostApi = async(data)=>{
    const header = {
        "Authorization":`Token ${sessionStorage.getItem('token')}`,
        "Content-Type":"multipart/form-data"
    }
    return await commonApi(`${base_url}/apply-jobs`,"POST",data,header)
}


//list Job post
export const listJobPostApi=async(search)=>{
    const header={
        "Authorization":`Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_url}/list-jobpost?search=${search}`,'GET',{},header)
}

//purchase book Api
export const purchaseBookApi = async(data)=>{
     const header={
        "Authorization":`Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_url}/purchase-book`,"POST",data,header)
}

// contact
export const sendMsgApi = async(data)=>{
    return await commonApi(`${base_url}/contact`,'POST',data)
}

//ADMIN
//get admin all books Api
export const getAdminAllBooksApi = async()=>{
     const header = {
        "Authorization":`Token ${sessionStorage.getItem('token')}`,
    }
    return await commonApi(`${base_url}/admin/get-books`,'GET',{},header)
}

//get admin all users Api
export const getAdminAllUsersApi = async()=>{
      const header = {
        "Authorization":`Token ${sessionStorage.getItem('token')}`,
    }
    return await commonApi(`${base_url}/admin/get-users`,'GET',{},header)
}

export const adminApproveBookApi = async(id)=>{
     const header = {
        "Authorization":`Token ${sessionStorage.getItem('token')}`,
    }
    return await commonApi(`${base_url}/admin/approve-book/${id}`,'PATCH',{},header)
}

//add job post
export const addJobApi = async(data)=>{
    const header = {
        "Authorization":`Token ${sessionStorage.getItem('token')}`,
    }
    return await commonApi(`${base_url}/admin/add-jobpost`,'POST',data,header)
}

//list jobpost
export const adminListJobPostApi = async(search)=>{
     const header = {
        "Authorization":`Token ${sessionStorage.getItem('token')}`,
    }
    return await commonApi(`${base_url}/admin/list-jobpost?search=${search}`,'GET',{},header)
}

//delete jobpost
export const adminDeleteJobPostApi = async(id)=>{
     const header = {
        "Authorization":`Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_url}/admin/delete-jobpost/${id}`,'DELETE',{},header)
}



//list applicants
export const getAdminApplicationsApi = async()=>{
    const header = {
        "Authorization":`Token ${sessionStorage.getItem('token')}`,
    }
    return await commonApi(`${base_url}/admin/get-applications`,"GET",{},header)
}

//Admin profile Update
export const AdminprofileUpdateApi=async(data)=>{
    const header={
        "Authorization":`Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_url}/admin/profile-update`,'PUT',data,header)
}

//Get admin Profile Data
export const getAdminProfileApi=async()=>{
    const header={
        "Authorization":`Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_url}/get-profile`,'GET',{},header)
}