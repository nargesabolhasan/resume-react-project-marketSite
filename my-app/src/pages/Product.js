import React from 'react'
import LayoutUser from "../Layouts/Layout-user"
import MainUser from "../user/Main-user"

const Product = () => {
  return (
    <div>Product
      <MainUser/>
    </div>
  )
}

export default LayoutUser(Product)