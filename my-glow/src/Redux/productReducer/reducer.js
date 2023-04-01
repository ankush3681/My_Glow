import { DELETEPRODUCTSUCCESS, GETPRODUCTSUCCESSSSTATUS, POSTPRODUCTSUCCESS, PRODUCTFAILEDSTATUS, PRODUCTREQUESTSTATUS, SINGLEPRODUCTFETCH } from "./actionType";


const initialState ={
    isLoading:false,
    isError:false,
    products:[],
    singleproduct:{}
}

export const reducer = (state=initialState,{type,payload}) =>{
 switch(type){
    case PRODUCTREQUESTSTATUS :{
        return {...state,isLoading:true}
    }
    case PRODUCTFAILEDSTATUS : {
        return {...state,isError:true,isLoading:false}
    }
    case GETPRODUCTSUCCESSSSTATUS : {
        return {...state,isLoading:false,products:payload}
    }

    case POSTPRODUCTSUCCESS:{
        return {...state,isLoading:false}
    }

    case DELETEPRODUCTSUCCESS:{
        return{...state,isLoading:false}
    }

    case SINGLEPRODUCTFETCH:{
        return{...state,isLoading:false,singleproduct:payload}
    }
    default:{
        return state;
    }
 }
}