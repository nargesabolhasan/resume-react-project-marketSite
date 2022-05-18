<<<<<<< HEAD
import React from 'react'
import LayoutUser from "../components/Layouts/Layout-user"
import { useNavigate, Outlet} from 'react-router-dom'
=======
import React from "react";
import LayoutUser from "../components/Layouts/Layout-user";
import { useNavigate, Outlet } from "react-router-dom";
<<<<<<< HEAD
import { MainUser } from "../components";
>>>>>>> develope
=======
import { MainUser, ModalAddProduct } from "../components";
import CardProduct from "../components/user/home/Card-Product";
import PaginationBackend from "../components/user/home/Pagination-Backend";
>>>>>>> develope

const Home = () => {
  //const navigate = useNavigate();
  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
    <div>Home</div>
    <button onClick={() =>navigate("/Basket", { replace: true })}>Basket</button>
    <button onClick={() =>navigate("/PanelProducts", { replace: true })}>PanelProducts</button>
    <button onClick={() =>navigate("/PanelQuantity", { replace: true })}>PanelQuantity</button>
    <button onClick={() =>navigate("/PanelOrder", { replace: true })}>PanelOrder</button>
    <button onClick={() =>navigate("/PanelLogin", { replace: true })}>PanelLogin</button>
    <button onClick={() =>navigate("/Payment", { replace: true })}>Payment</button>
    <button onClick={() =>navigate("/Product", { replace: true })}>Product</button>
    <button onClick={() =>navigate("/ProductGroup", { replace: true })}>ProductGroup</button>
    <button onClick={() =>navigate("/ResultPayment", { replace: true })}>ResultPayment</button>
    <button onClick={() =>navigate("/SubmitPayment", { replace: true })}>SubmitPayment</button>
=======
      <div>Home</div>
      <button onClick={() => navigate("/Basket", { replace: true })}>
        Basket
      </button>
      <button onClick={() => navigate("/PanelProducts", { replace: true })}>
        PanelProducts
      </button>
      <button onClick={() => navigate("/PanelQuantity", { replace: true })}>
        PanelQuantity
      </button>
      <button onClick={() => navigate("/PanelOrder", { replace: true })}>
        PanelOrder
      </button>
>>>>>>> develope

      <button onClick={() => navigate("/PanelLogin", { replace: true })}>
        PanelLogin
      </button>
      <button onClick={() => navigate("/Payment", { replace: true })}>
        Payment
      </button>
      <button onClick={() => navigate("/Product", { replace: true })}>
        Product
      </button>
      <button onClick={() => navigate("/ProductGroup", { replace: true })}>
        ProductGroup
      </button>
      <button onClick={() => navigate("/ResultPayment", { replace: true })}>
        ResultPayment
      </button>
      <button onClick={() => navigate("/SubmitPayment", { replace: true })}>
        SubmitPayment
      </button>
      <MainUser />
=======
>>>>>>> develope
      <Outlet />
      <PaginationBackend/>
     
    </>
  );
};

export default LayoutUser(Home);

{
  /* <Route path="/PanelProducts" element={<PanelProducts />} />
<Route path="/PanelQuantity" element={<PanelQuantity />} />
<Route path="/PanelOrder" element={<PanelOrder />} /> */
}
