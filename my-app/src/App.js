import "./assets/Core-ui/Core-styles.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import PanelAdmin from "./pages/Panel-Admin";
import PanelLogin from "./pages/Panel-Login";
import Payment from "./pages/Payment";
import Product from "./pages/Product";
import ProductGroup from "./pages/ProductGroup";
import ResultPayment from "./pages/ResultPayment";
import SubmitPayment from "./pages/SubmitPayment";

function App() {
  return (
    <div style={{ fontFamily: "koodak" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Basket" element={<Basket />} />
        <Route path="/PanelAdmin/:table" element={<PanelAdmin />} />
        <Route path="/PanelLogin" element={<PanelLogin />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Product/:id" element={<Product />} />
        <Route path="/ProductGroup/:id" element={<ProductGroup />} />
        <Route path="/ResultPayment/:result" element={<ResultPayment />} />
        <Route path="/SubmitPayment" element={<SubmitPayment />} />
      </Routes>
    </div>
  );
}

export default App;
