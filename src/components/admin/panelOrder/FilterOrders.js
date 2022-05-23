import React, { useState, useEffect } from "react";
import TableOrder from "./TableOrder";
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import useGetAxios from "../../../axios/useGetAxios"


const ProductTable = (props) => {
  let sortableItems = [...props.products];
  let [initialState,setInitialState]= useState()
  const [filteredData, setFilteredData] = useState();
  const {data,loading, error}=useGetAxios("orders")
  console.log(data?.data)

  useEffect(() =>{
    data?.data.map(item=>{
      if(item.orderStatus===3){
        setFilteredData(item)
      }
    })
  },[])


  const handleChange = (e) => {
    setFilteredData(
      sortableItems.filter((item) => {
        if (e.target.value == item.orderStatus) {
          return item;
        }
      })
    );
  };

  return (
    <Box >
      <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="3"
    name="radio-buttons-group"
  >
    <FormControlLabel value="1" control={<Radio  sx={{fontSize: 20, fontFamily: "koodak"}}/>}  onChange={handleChange} label="سفارش های تحویل شده"  sx={{fontSize: 20, fontFamily: "koodak"}}/>
    <FormControlLabel value="3" control={<Radio  sx={{fontSize: 20, fontFamily: "koodak"}}/>} onChange={handleChange} label="سفارش های در انتظار تحویل" sx={{fontSize: 20, fontFamily: "koodak"}} />
  </RadioGroup>
      {filteredData ? (
        <TableOrder products={filteredData} />
      ) : (
        <TableOrder products={props.products} />
      )}
    </Box >
  );
};

export default function App(props) {
  //   let sortedProducts = [products.map((item=>{return item.name}))]
  //   console.log(products)
  const { products } = props;
  return (
    <div>
      <ProductTable products={products} />
    </div>
  );
}
