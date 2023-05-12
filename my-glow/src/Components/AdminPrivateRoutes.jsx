import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const AdminPrivateRoutes = ({children}) => {
    const location = useLocation();
  const store = useSelector((state)=> {
    //    console.log(state.authReducer.isAuth)
       return state.adminAuth
})
console.log(store)


return store.adminAuth? children : <Navigate to="/adminlogin" state={location.pathname}/>
}

export default AdminPrivateRoutes;