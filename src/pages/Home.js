import React from 'react'
import LayoutUser from "../components/Layouts/Layout-user"
import { useNavigate, Outlet} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
    <div>Home</div>
    <button onClick={() =>navigate("/Basket", { replace: true })}>Basket</button>
    <button onClick={() =>navigate("/PanelAdmin", { replace: true })}>PanelAdmin</button>
    <button onClick={() =>navigate("/PanelLogin", { replace: true })}>PanelLogin</button>
    <button onClick={() =>navigate("/Payment", { replace: true })}>Payment</button>
    <button onClick={() =>navigate("/Product", { replace: true })}>Product</button>
    <button onClick={() =>navigate("/ProductGroup", { replace: true })}>ProductGroup</button>
    <button onClick={() =>navigate("/ResultPayment", { replace: true })}>ResultPayment</button>
    <button onClick={() =>navigate("/SubmitPayment", { replace: true })}>SubmitPayment</button>

    <Outlet/>
</>
  )
}

export default LayoutUser(Home)