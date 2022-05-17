import React from "react";
import LayoutUser from "../components/Layouts/Layout-user";
import { useNavigate, Outlet } from "react-router-dom";
import { MainUser, ModalAddProduct } from "../components";
import CardProduct from "../components/user/home/Card-Product";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
<CardProduct/>
      <Outlet />
    </>
  );
};

export default LayoutUser(Home);

{
  /* <Route path="/PanelProducts" element={<PanelProducts />} />
<Route path="/PanelQuantity" element={<PanelQuantity />} />
<Route path="/PanelOrder" element={<PanelOrder />} /> */
}
