import React, {useState,useEffect} from "react";
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
//--------------------------------------------

const ModalOrders = (props) => {
  const { info } = props;
  const header = ["نام کالا", "قیمت"];
  const [allPrice, setAllPrice]=useState(0);

  let dollarUSLocale = Intl.NumberFormat('en-US');

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

  //all price:
  // (() => {
  //   info.orderItems.map((item) =>{
  //     setAllPrice(allPrice+item.price*item.count)
  //   })
  // })();


  useEffect(() => {
    ( () => {
      let sum=0
    info.orderItems.map((item) =>{
      sum=item.price*item.count;
      sum+=sum
      setAllPrice(sum)
    })
    })();
  }, []);

  return (
    <Div>
      <TittleCells>بررسی اطلاعات</TittleCells>
      <Div>
        <Table sx={{fontFamily:"SansWeb"}}>
          <TableHead sx={{ color: "white", backgroundColor: "primary.main" }}>
            <TableCells sx={{ textAlign: "center",fontSize:15}}>نام </TableCells>
            <TableCells sx={{ textAlign: "center" ,fontSize:15}}> نام خانوادگی</TableCells>
            <TableCells sx={{ textAlign: "center",fontSize:15 }}>شماره تماس</TableCells>
            <TableCells sx={{ textAlign: "center",fontSize:15 }}> محل سکونت</TableCells>
            <TableCells sx={{ textAlign: "center",fontSize:15 }}>  زمان ثبت سفارش</TableCells>
            <TableCells sx={{ textAlign: "center",fontSize:15 }}>  زمان تحویل سفارش</TableCells>
          </TableHead>
          <TableCells sx={{ textAlign: "center" ,fontSize:15}}>
            {info.customerDetail.firstName}
          </TableCells>
          <TableCells sx={{ textAlign: "center",fontSize:15 }}>
            {info.customerDetail.lastName}
          </TableCells>
          <TableCells sx={{ textAlign: "center" ,fontSize:15}}>
            {info.customerDetail.phone}
          </TableCells>
          <TableCells sx={{ textAlign: "center" ,fontSize:15}}>
            {info.customerDetail.billingAddress}
          </TableCells>
          <TableCells sx={{ textAlign: "center" ,fontSize:15}}>
          {new Date(info.orderDate).toLocaleDateString("fa-IR")}
          </TableCells>
          <TableCells sx={{ textAlign: "center" ,fontSize:15}}>
          {new Date(info.deliveredAt).toLocaleDateString("fa-IR")}
          </TableCells>
        </Table>
      </Div>
      {info.orderItems.map((item) => (
        <Table>
          <TableHead sx={{ color: "white", backgroundColor: "primary.main" }}>
            {header.map((item) => (
              <TableCells sx={{ textAlign: "center",fontSize:15 }}>{item}</TableCells>
            ))}
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCells sx={{ textAlign: "start",fontSize:15 }}> {item.name}</TableCells>
              <TableCells sx={{ textAlign: "center",fontSize:15 }}> { dollarUSLocale.format(item.price)}</TableCells>
              <TableCells sx={{ textAlign: "center",fontSize:15 }}> {item.count}</TableCells>
            </TableRow>
          </TableBody>
        </Table>
      ))}
      <Box>
        <Typography>قیمت نهایی:</Typography>
        <Typography>{ dollarUSLocale.format(allPrice)}</Typography>
      </Box>
      {(info.orderStatus===3)?<ButtonAdd clickHandler={handleSubmit}>تحویل شد</ButtonAdd>:<h1>Add</h1>}
    </Div>
  );
};

export default ModalOrders;
