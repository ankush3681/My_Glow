import axios from "axios";
import { SIGNUPSUCCESSSTATUS } from "./actionType";

export const postsignup = (data) => (dispatch) =>{
 return axios({
    method:"post",
    url:"https://glow-6s9y.onrender.com/login",data

 }).then((res)=>{
    console.log(res)
   dispatch({type:SIGNUPSUCCESSSTATUS,payload:res.data})
})
 .catch((err)=>{
    console.log(err)
 })
}