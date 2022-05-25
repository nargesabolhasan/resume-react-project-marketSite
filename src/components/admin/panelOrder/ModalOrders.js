import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import ButtonAdd from "../../buttons/Button-add";
import axios from "axios";

const TableCells = styled("td")(({ theme }) => ({
  textAlign: "center",
  fontSize: 20,
  border: "1px solid black",
  padding: 3,
}));
const TittleCells = styled("td")(({ theme }) => ({
  textAlign: "center",
  fontSize: 20,
  padding: 5,
  fontFamily: "koodak",
}));
const Div = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
}));

const ModalOrders = (props) => {
  const { info } = props;
  const header = ["نام کالا", "قیمت"];

  const handleSubmit = () => {
    axios.patch(
      `orders/${info.id}`,
      { ...info, orderStatus: 1 },
      { headers: { token: localStorage.getItem("token") } }
    );
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
  };
  console.log(info);
  return (
    <Div>
      <TittleCells>بررسی اطلاعات</TittleCells>
      <Div>
        <Table>
          <TableHead sx={{ color: "white", backgroundColor: "primary.main" }}>
            <TableCells sx={{ textAlign: "center" }}>نام </TableCells>
            <TableCells sx={{ textAlign: "center" }}> نام خانوادگی</TableCells>
            <TableCells sx={{ textAlign: "center" }}>شماره تماس</TableCells>
            <TableCells sx={{ textAlign: "center" }}> محل سکونت</TableCells>
          </TableHead>
          <TableCells sx={{ textAlign: "center" }}>
            {info.customerDetail.firstName}
          </TableCells>
          <TableCells sx={{ textAlign: "center" }}>
            {info.customerDetail.lastName}
          </TableCells>
          <TableCells sx={{ textAlign: "center" }}>
            {info.customerDetail.phone}
          </TableCells>
          <TableCells sx={{ textAlign: "center" }}>
            {info.customerDetail.billingAddress}
          </TableCells>
        </Table>
      </Div>
      {info.orderItems.map((item) => (
        <Table>
          <TableHead sx={{ color: "white", backgroundColor: "primary.main" }}>
            {header.map((item) => (
              <TableCells sx={{ textAlign: "center" }}>{item}</TableCells>
            ))}
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCells> {item.name}</TableCells>
              <TableCells> {item.price}</TableCells>
            </TableRow>
          </TableBody>
        </Table>
      ))}
      {(info.orderStatus===3)?<ButtonAdd clickHandler={handleSubmit}>تحویل شد</ButtonAdd>:<h1>Add</h1>}
    </Div>
  );
};

export default ModalOrders;
