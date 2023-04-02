import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const location = useLocation();
  const {isAuth} = useSelector((state)=> {
    //    console.log(state.authReducer.isAuth)
       return state.authReducer
})

return isAuth ? children : <Navigate to="/login" state={location.pathname}/>
}

export default PrivateRoutes;
