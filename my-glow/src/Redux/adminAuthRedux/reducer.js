import { ADMINLOGINFAILEDSTATUS, ADMINLOGINREQUESTSTATUS, ADMINLOGINSUCCESSSTATUS } from "./actionType";

const initState = {
 adminAuth:false,
 token:"",
 isLoading:"",
 isError:"",
}

export const reducer = (state=initState,{type,payload}) =>{
    switch(type){
        case ADMINLOGINREQUESTSTATUS : {
            return {...state,isLoading:true}
        }
        case ADMINLOGINSUCCESSSTATUS : {
            return {...state,isLoading:false,adminAuth:true,token:payload}
        }
        case ADMINLOGINFAILEDSTATUS : {
            return {...state,isLoading:false,isError:true}
        }
        default:return state;
    }
}