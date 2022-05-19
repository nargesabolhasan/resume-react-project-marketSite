import React, { useState, useEffect } from "react";
import TableOrder from "./TableOrder";

const ProductTable = (props) => {
  let sortableItems = [...props.products];
  const [filteredData, setFilteredData] = useState();

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
    <div>
      <label>سفارش های تحویل شده</label>
      <input value="3" type="radio" name="platform" onChange={handleChange} />
      <label>سفارش های در انتظار تحویل</label>
      <input value="1" type="radio" name="platform" onChange={handleChange} />
      {filteredData ? (
        <TableOrder products={filteredData} />
      ) : (
        <TableOrder products={props.products} />
      )}
    </div>
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
