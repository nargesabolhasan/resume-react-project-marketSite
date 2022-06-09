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
import HttpService from "../../../axios/HttpService";

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
  fontFamily: "SansWeb",
}));
const Div = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
}));
//--------------------------------------------

const ModalOrders = (props) => {
  
  const { info ,updateData,closeModal,updateDataBase} = props;
  const header = ["نام کالا", "قیمت", "تعداد"];
  const [allPrice, setAllPrice]=useState(0);

  let dollarUSLocale = Intl.NumberFormat('en-US');

  const handleSubmit = () => {
    const deliveredAt =new Date()
    HttpService.patch(
      `orders/${info.id}`,
      { ...info, orderStatus: 1 ,deliveredAt:deliveredAt.getTime()},
      { headers: { token: localStorage.getItem("token") } }
   );
   //updateDataBase()
    updateData()
    setTimeout(() => {
      closeModal()
      //window.location.reload(false)
    }, 600);
  };
  //-----all price:------
  useEffect(() => {
    ( () => {
      let sum=0
    info.orderItems.map((item) =>{
      sum+=item.price*item.orderCount
      setAllPrice(sum)
    })
    })();
  }, []);


  return (
    <Div sx={{mt:6}}>
      <TittleCells>مشتری اطلاعات</TittleCells>
      <Div>
        <Table sx={{fontFamily:"SansWeb"}}>
          <TableHead sx={{ color: "white", backgroundColor: "primary.main" }}>
            <TableCells sx={{ textAlign: "center",fontSize:15}}>نام </TableCells>
            <TableCells sx={{ textAlign: "center" ,fontSize:15}}> نام خانوادگی</TableCells>
            <TableCells sx={{ textAlign: "center",fontSize:15 }}>شماره تماس</TableCells>
            <TableCells sx={{ textAlign: "center",fontSize:15 }}> آدرس</TableCells>
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
          {new Date(info.customerDetail.orderDate).toLocaleDateString("fa-IR")}
          </TableCells>
          <TableCells sx={{ textAlign: "center" ,fontSize:15}}>
          {(info.deliveredAt==="-")? <>تحویل نشده است</> :<>{new Date(info.deliveredAt).toLocaleDateString("fa-IR")}</>}
          </TableCells>
        </Table>
      </Div>
      <Div sx={{mt:10,mb:10,borderTop:1}}>
      <TittleCells> اطلاعات سفارشات</TittleCells>

      {info.orderItems.map((item) => (
        <Table sx={{width:570, p:3, mt :3,fontFamily:"SansWeb"}}>
          <TableHead sx={{ color: "white", backgroundColor: "primary.main" }}>
            {header.map((item) => (
              <TableCells sx={{ textAlign: "center",fontSize:15 }}>{item}</TableCells>
            ))}
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCells sx={{ textAlign: "start",fontSize:15 }}> {item.name}</TableCells>
              <TableCells sx={{ textAlign: "center",fontSize:15 }}> { dollarUSLocale.format(item.price)}</TableCells>
              <TableCells sx={{ textAlign: "center",fontSize:15 }}> {item.orderCount}</TableCells>
            </TableRow>
          </TableBody>
        </Table>
      ))}
      </Div>
      <Box sx={{mb:5,borderTop:1,borderBottom:1, p:3}}>
        <TittleCells>قیمت نهایی:</TittleCells>
        <TittleCells>{ dollarUSLocale.format(allPrice)}</TittleCells>
      </Box>
      {(info.orderStatus===3)?<ButtonAdd clickHandler={handleSubmit}>تحویل شد</ButtonAdd>: <TittleCells>تاریخ تحویل : {new Date(info.deliveredAt).toLocaleDateString("fa-IR")}</TittleCells>}
    </Div>
  );
};

export default ModalOrders;
