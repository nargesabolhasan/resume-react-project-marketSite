import React, { useEffect,useState } from "react";
import { LayoutAdmin } from "../components/index";
import { Table } from "../components/index";
import HttpService from "../axios/HttpService";

const PanelQuantity = () => {
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);

  //-----------
  useEffect(() => {
    getData();
  }, []);
  //-----------
  const getData = async () => {
    setCategory(await HttpService.get("categories?_embed=products"));
    setData(await HttpService.get("products"));
  };

  return (
    <div>
      PanelProducts
      <Table products={data} category={category}/>
    </div>
  );
}

export default LayoutAdmin(PanelQuantity)