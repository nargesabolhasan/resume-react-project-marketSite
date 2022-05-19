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
import axios from "axios"

const TableCells = styled("td")(({ theme }) => ({
    textAlign: "center",
    fontSize: 20,
    border: "1px solid black",
    padding: 3

}));
const TittleCells = styled("td")(({ theme }) => ({
  textAlign: "center",
  fontSize: 20,
  padding: 5,
  fontFamily: "koodak"
}));

const ModalOrders = (props) => {
  const { info } = props;
  const header=[ "نام کالا","قیمت"]

  const handleSubmit=()=>{
    const status=info.orderStatus
    // console.log(info.orderStatus)
    // const Completed={"orderStatus":1 }
    console.log({ ...info , orderStatus:1})
    axios.patch(`orders/${info.id}`, { ...info , orderStatus:1}, { headers: {"token" : localStorage.getItem("token")} })
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
  }
  return (
    <div>
      <TittleCells>بررسی اطلاعات</TittleCells>
      {info.orderItems.map((item) => (
        <Table>
          <TableHead sx={{color: "white",backgroundColor: "primary.main"}}>
            {header.map((item) => (<TableCells  sx={{textAlign: "center"}}>{item}</TableCells>))}
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCells> {item.name}</TableCells>
              <TableCells> {item.price}</TableCells>
            </TableRow>
          </TableBody>
        </Table>
      ))}
      <ButtonAdd clickHandler={handleSubmit}>تحویل شد</ButtonAdd>
    </div>
  );
};

export default ModalOrders;
