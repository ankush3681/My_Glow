import {
  DELETEPRODUCTSUCCESS,
  GETPRODUCTSUCCESSSSTATUS,
  POSTPRODUCTSUCCESS,
  PRODUCTFAILEDSTATUS,
  PRODUCTREQUESTSTATUS,
  SINGLEPRODUCTFETCH,
} from "./actionType";
import axios from "axios";

const post_product_success = () => {
  return { type: POSTPRODUCTSUCCESS };
};


export const get_products = (dispatch) =>{
   dispatch({type:PRODUCTREQUESTSTATUS})
 axios.get(`https://glow-6s9y.onrender.com/myglow`)  
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
    .then((res) => dispatch(post_product_success))
    .catch((err) => dispatch({type:PRODUCTFAILEDSTATUS}));
};

export  const  deleteProduct =  (id) =>  async (dispatch)=>{
 dispatch({type:PRODUCTREQUESTSTATUS})
  await axios.delete(`https://glow-6s9y.onrender.com/myglow/${id}`).then((res)=>{
    console.log(res)
    dispatch({type:DELETEPRODUCTSUCCESS})
  }).catch((err)=>{
    dispatch({type:PRODUCTFAILEDSTATUS})
  })
}

export const getSingleProduct = (id)=> async (dispatch)=>{
  dispatch({type:PRODUCTREQUESTSTATUS})

 await axios.get(`https://glow-6s9y.onrender.com/myglow/${id}`).then((res)=>{
    console.log(res)
    dispatch({type:SINGLEPRODUCTFETCH,payload:res.data})
  }).catch((err)=>console.log(err))
}


export const patchProduct = (id,data)=> async (dispatch)=>{
  dispatch({type:PRODUCTREQUESTSTATUS})
  await axios.patch(`https://glow-6s9y.onrender.com/myglow/${id}`,data).then((res)=>{
    console.log(res)
    dispatch({type:SINGLEPRODUCTFETCH,payload:res.data})
  }).catch((err)=>console.log(err))

}