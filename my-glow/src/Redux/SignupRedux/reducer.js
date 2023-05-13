import { SIGNUPFAILEDSTATUS, SIGNUPREQUESTSTATUS, SIGNUPSUCCESSSTATUS } from "./actionType"

const initialState = {
    users:[],
    isLoading:false,
    isError:false
}

export const reducer = (state=initialState,{type,payload}) =>{
   switch(type){
    case SIGNUPREQUESTSTATUS :{
        return {...state,isLoading:true}
    }
    case SIGNUPSUCCESSSTATUS :{
        return {...state,isLoading:false,users:[...state.users,payload]}
    }
    case SIGNUPFAILEDSTATUS:{
        return {...state,isLoading:false,isError:true}
    }
     default : {
         return state;
    }
   }
}