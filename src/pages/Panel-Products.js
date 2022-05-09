import React, { useEffect,useState } from "react";
import { LayoutAdmin } from "../components/index";
import { Table } from "../components/index";
import HttpService from "../axios/HttpService";

const PanelProducts = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  //-----------
  useEffect(() => {
    getData();
  }, []);
  //-----------
  const getData = async () => {
    setItems(await HttpService.get("products"));
  };

  return (
    <div>
      PanelProducts
      <Table products={items} />
    </div>
  );
};

export default LayoutAdmin(PanelProducts);
