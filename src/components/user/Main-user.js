import React, { useEffect, useState } from "react";
import HttpService from "../../axios/HttpService";
import { BASE_URL } from "../../constants/Constants";
//import ""

const MainUser = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setItems(await HttpService.get("products"));
  };

  return (
    <div>
      {/* {items.map((item) => (
        <>
              <picture>
        <source srcset={`${ BASE_URL }${item.image}`} type="image/webp" />
        <img src={`${ BASE_URL }${item.image}`} alt="Alt Text!" />
      </picture>
          <li style={{direction:"rtl"}}>{item.description}</li>
          <li style={{direction:"rtl"}}>{item.name}</li>
        </>
      ))} */}
    </div>
  );
};

export default MainUser;
