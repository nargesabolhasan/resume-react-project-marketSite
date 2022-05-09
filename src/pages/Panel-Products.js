import React, { useEffect,useState } from "react";
import { LayoutAdmin } from "../components/index";
import { Table } from "../components/index";
import HttpService from "../axios/HttpService";

const PanelProducts = () => {
  const [data, setData] = useState([]);
  //-----------
  useEffect(() => {
    getData();
  }, []);
  //-----------
  const getData = async () => {
    setData(await HttpService.get("products"));
  };

  return (
    <div>
      PanelProducts
      <Table products={data} />
    </div>
  );
};

export default LayoutAdmin(PanelProducts);
