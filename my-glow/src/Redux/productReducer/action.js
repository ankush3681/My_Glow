import { 
    GETPRODUCTSUCCESSSSTATUS, 
    PRODUCTFAILEDSTATUS, 
    PRODUCTREQUESTSTATUS 
} from "./actionType";
import axios from "axios";


export const get_products = (dispatch) =>{
   dispatch({type:PRODUCTREQUESTSTATUS})
 axios.get(`https://glow-iw5x.onrender.com/myglow`)
 .then((res)=>{
    // console.log(res.data);
    dispatch({type:GETPRODUCTSUCCESSSSTATUS,payload:res.data})
 })
 .catch(()=>{
   dispatch({type:PRODUCTFAILEDSTATUS})
 })
}