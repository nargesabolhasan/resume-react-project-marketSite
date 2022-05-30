import React from 'react'
import jwt_decode from 'jwt_decode'
import { Navigate,useLocation } from 'react-router-dom'

const ProtectedRoutes = () => {
    const location = useLocation()
    const token=localStorage.getItem("token")
    var decoded = jwt_decode(token)
    const init=new Date(decoded.iat)
    const exp=new Date(decoded.exp)
  return (
    <div>ProtectedRoutes</div>
  )
}

export default ProtectedRoutes