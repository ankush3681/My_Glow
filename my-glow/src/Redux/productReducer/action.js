import { 
    GETPRODUCTSUCCESSSSTATUS, 
    PRODUCTFAILEDSTATUS, 
    PRODUCTREQUESTSTATUS 
} from "./actionType";
import axios from "axios";


export const get_products = (dispatch) =>{
   dispatch({type:PRODUCTREQUESTSTATUS})
 axios.get(`https://lime-repulsive-cockroach.cyclic.app/myglow`)
 .then((res)=>{
    // console.log(res.data);
    dispatch({type:GETPRODUCTSUCCESSSSTATUS,payload:res.data})
 })
 .catch(()=>{
   dispatch({type:PRODUCTFAILEDSTATUS})
 })
}