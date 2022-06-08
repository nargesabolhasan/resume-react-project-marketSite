import Authentication from "./configRoutes/ProtectedRoutes";
import FormValidation from "./admin/login/FormValidation";
import HeaderAdmin from "./admin/Header-admin";
import Modals from "./modal/Modals";
import TablesProduct from "./admin/panelProduct/TablesProduct";
import TableQuantity from "./admin/panelQuantity/TableQuantity";
import TableOrder from "./admin/panelOrder/TableOrder";
import SortData from "./admin/panelQuantity/SortData";
import FilterOrders from "./admin/panelOrder/FilterOrders";
import ModalAddProduct from "./admin/panelProduct/Form-addProduct";
import ModalEditProduct from "./admin/panelProduct/Form-editProduct";

import ProtectedRoutes from "./configRoutes/ProtectedRoutes";
import PublicRoutes from "./configRoutes/PublicRoutes";

import ButtonAdd from "./buttons/Button-add";
import ButtonSubmit from "./buttons/Button-submit";


import Dashboards from "./user/Dashboards";
import FooterUser from "./user/FooterUser";
import HomeCategoty from "./user/HomeCategoty";
import HeaderUserStore from "./user/Header-user-store";
import MainUser from "./user/Main-product";
import MainBasket from "./user/MainBasket";
import TableBasket from "./user/TableBasket";

import LayoutAdmin from "./Layouts/Layout-admin";
import LayoutUser from "./Layouts/Layout-user";

export {
  ProtectedRoutes,
  PublicRoutes,
  Authentication,
  FormValidation,
  HeaderAdmin,
  Modals,
  TablesProduct,
  TableQuantity,
  TableOrder,
  ButtonAdd,
  MainBasket,
  TableBasket,
  ButtonSubmit,
  Dashboards,
  FooterUser,
  HomeCategoty,
  HeaderUserStore,
  MainUser,
  LayoutAdmin,
  LayoutUser,
  SortData,
  FilterOrders,
  ModalAddProduct,
  ModalEditProduct,
};
