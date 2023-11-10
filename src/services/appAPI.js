import  {commonAPI}  from "./commonAPI"
import { serverURL } from "./serverURL"
// upload video

export const uploadVideo = async(reqBody)=>{
   return await commonAPI('POST',`${serverURL}/video`,reqBody)
}

//get all uploaded videos

export const getAllVideos = async()=>{
    return await commonAPI('GET',`${serverURL}/video`,"")

}

//to delete a vedio
export const deleteAVideo = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/video/${id}`,{})

}

//API TO ADD history

export const addHistory = async(vedioDetails)=>{
    return await commonAPI('POST',`${serverURL}/history`,vedioDetails)

}

//API to get history from json-server

export const getAllHistory = async()=>{
    return await commonAPI('GET',`${serverURL}/history`,'')

}

//api call to delete histroy
export const deleteVideoHistory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})

}




//api to add category to json-server

export const addAllCategory = async(bod)=>{
    return await commonAPI('POST',`${serverURL}/category`,bod)

}

//api to get all categories from json-server
export const getAllCategories = async()=>{
    return await commonAPI('GET',`${serverURL}/category`,"")

}

//API to delete categories from json-server
export const deletecategory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})

}

//Api  to get particular video from http://localhost:5000/video
export const getAVideo = async(id)=>{
    return await commonAPI('GET',`${serverURL}/video/${id}`,'')

}

// Api to add the category with new videos

export const updateCategory = async(id,body)=>{
    
    return await commonAPI('PUT',`${serverURL}/category/${id}`,body)

}