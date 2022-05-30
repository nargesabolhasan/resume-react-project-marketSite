import React, {useEffect} from 'react'
import { Outlet,useLocation} from 'react-router-dom'

const PublicRoutes = () => {
    const location = useLocation()
    useEffect(() => {
        //...
    },[location])
  return (
    <Outlet/>
  )
}

export default PublicRoutes