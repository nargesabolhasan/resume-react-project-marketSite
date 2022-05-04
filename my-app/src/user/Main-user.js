import React, { useEffect, useState } from 'react'
import HttpService from "../axios/HttpService"

const MainUser = () => {
  const [data,setData] =useState([])
  const [items, setItems] = useState([])
  useEffect(() => {
    HttpService.get("products").then((response) =>setData(response))
  },[])

  useEffect(()=>{
    Object.values(data).map((data) =>setItems([...items,data]))
  },[data])

  // setTimeout(() =>{
  //   items.forEach((item) =>console.log(item))
  // } ,4000)
  return (
    <div>
      {items.map((item) =>(<li>{item.id}</li>))}
    </div>
  )
}

export default MainUser