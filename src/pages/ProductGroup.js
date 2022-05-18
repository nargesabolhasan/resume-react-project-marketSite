import React from 'react'
import LayoutUser from "../components/Layouts/Layout-user"
import { useNavigate, NavLink ,useParams} from "react-router-dom";

const ProductGroup = () => {
  let { happoo } = useParams()
console.log(happoo)
  return (
    <div>ProductGroup</div>
  )
}

export default LayoutUser(ProductGroup)