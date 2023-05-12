import axios from "axios"
import { ADMINLOGINFAILEDSTATUS, ADMINLOGINREQUESTSTATUS, ADMINLOGINSUCCESSSTATUS } from "./actionType";


export const adminLogin = (obj) => (dispatch) =>{
    dispatch({type:ADMINLOGINREQUESTSTATUS})
   return axios.post(`https://reqres.in/api/login`,obj)
    .then((res)=>{
        console.log(res.data.token);
        dispatch({type:ADMINLOGINSUCCESSSTATUS,payload:res.data.token})
    })
    .catch(()=> dispatch({type:ADMINLOGINFAILEDSTATUS}) )
}