import React, { useEffect, useState } from 'react'
import HttpService from "../../axios/HttpService"

const MainUser = () => {
  const [data,setData] =useState([])
  const [items, setItems] = useState([])
  useEffect(() => {
    getData()
  },[])

  const getData=async()=> {
    setItems(await HttpService.get("products"))
  }

  console.log(items)
  return (
    <div>
      {/* {items.map((item) =>(<li>{item.id}</li>))} */}
    </div>
  )
}

export default MainUser


  // useEffect(()=>{
  //   Object.values(data).map((data) =>setItems([...items,data]))
  // },[data])

  // setTimeout(() =>{
  //   items.forEach((item) =>console.log(item))
  // } ,4000)