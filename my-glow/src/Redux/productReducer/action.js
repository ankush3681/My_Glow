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


export const postProduct = (data) => (dispatch) => {
  dispatch({ type: PRODUCTREQUESTSTATUS });

  axios
    .post(`https://glow-iw5x.onrender.com/myglow`, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err.response.data));
};

