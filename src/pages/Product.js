import React from 'react'
import LayoutUser from "../components/Layouts/Layout-user"
import MainUser from "../components/user/Main-user"

const Product = () => {
  return (
    <div>Product
      <MainUser/>
    </div>
  )
}

export default LayoutUser(Product)