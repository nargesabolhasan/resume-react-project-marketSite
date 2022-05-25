import "./assets/Core-ui/Core-styles.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import PanelLogin from "./pages/Panel-Login";
import Payment from "./pages/Payment";
import Product from "./pages/Product";
import ProductGroup from "./pages/ProductGroup";
import ResultPayment from "./pages/ResultPayment";
import SubmitPayment from "./pages/SubmitPayment";
import PanelProducts from "./pages/Panel-Products";
import PanelQuantity from "./pages/Panel-Quantity";
import PanelOrder from "./pages/Panel-Order";
import Grouping from "./pages/Grouping";

function App() {
  return (
    <div style={{ fontFamily: "koodak" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grouping" element={<Grouping/>} />
        <Route path="/Basket" element={<Basket />} />
        <Route path="/PanelProducts" element={<PanelProducts />} />
        <Route path="/PanelQuantity" element={<PanelQuantity />} />
        <Route path="/PanelOrder" element={<PanelOrder />} />
        <Route path="/PanelLogin" element={<PanelLogin />} />
        <Route path="/Payment" element={<Payment />} />
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path="/Product/:id" element={<Product />} />
        <Route path="/ProductGroup/:id" element={<ProductGroup />} />
=======
        <Route path="/Product" element={<Product />} />
        <Route path="/ProductGroup" element={<ProductGroup />} />
>>>>>>> develope
=======
        <Route path="/Products/:name" element={<Product />} />
        <Route path="/categories/:id" element={<ProductGroup />} />
>>>>>>> develope
        <Route path="/ResultPayment" element={<ResultPayment />} />
        <Route path="/SubmitPayment" element={<SubmitPayment />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
