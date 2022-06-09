import React, { useState, useEffect } from "react";
import TableOrder from "./TableOrder";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Box from "@mui/material/Box";
import RadioGroup from "@mui/material/RadioGroup";
import HttpService from "../../../axios/HttpService";

const ProductTable = (props) => {
  let sortableItems = [...props.products];
  let [initialState, setInitialState] = useState();
  const [filteredData, setFilteredData] = useState();
  //-----------------
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    props.updateData();
    const result = await HttpService.get("orders?orderStatus=3&_sort=customerDetail.orderDate&_order=desc");
    setFilteredData(result?.data);
  };

  const handleChange = (e) => {
    props.updateData();
    setFilteredData(
      sortableItems.filter((item) => {
        if (e.target.value == item.orderStatus) {
          return item;
        } else if (e.target.value == 0) {
          return item;
        }
      })
    );
  };
  console.log(filteredData);
  return (
    <Box sx={{ width: "100%" }}>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="3"
        name="radio-buttons-group"
        sx={{ fontSize: 20, fontFamily: "koodak", direction: "rtl", mt: 3 }}
      >
        <FormControlLabel
          value="0"
          control={<Radio />}
          onChange={handleChange}
          label="تمام سفارشات "
        />
        <FormControlLabel
          value="1"
          control={<Radio />}
          onChange={handleChange}
          label="سفارش های تحویل شده"
        />
        <FormControlLabel
          value="3"
          control={<Radio />}
          onChange={handleChange}
          label="سفارش های در انتظار تحویل"
        />
      </RadioGroup>
      {filteredData ? (
        <TableOrder products={filteredData} updateData={getData} updateDataBase={props.updateData}/>
      ) : (
        <TableOrder products={props.products} updateData={getData} />
      )}
    </Box>
  );
};

export default function App(props) {
  const { products, updateData } = props;
  return (
    <div>
      <ProductTable products={products} updateData={updateData} />
    </div>
  );
}
