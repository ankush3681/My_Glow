import {
  GETPRODUCTSUCCESSSSTATUS,
  POSTPRODUCTSUCCESS,
  PRODUCTFAILEDSTATUS,
  PRODUCTREQUESTSTATUS,
} from "./actionType";
import axios from "axios";

const post_product_success = () => {
  return { type: POSTPRODUCTSUCCESS };
};


export const get_products = (postObj) => (dispatch) =>{
   dispatch({type:PRODUCTREQUESTSTATUS})
 axios.get(`https://glow-6s9y.onrender.com/myglow`,postObj)  
 .then((res)=>{
    // console.log(res.data);
    dispatch({type:GETPRODUCTSUCCESSSSTATUS,payload:res.data})
 })
 .catch(()=>{
   dispatch({type:PRODUCTFAILEDSTATUS})
 })
}


export const postProduct = (data) => (dispatch) => {
  dispatch({ type: PRODUCTREQUESTSTATUS });

  axios
    .post(`https://glow-6s9y.onrender.com/myglow`, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err.response.data));
};

