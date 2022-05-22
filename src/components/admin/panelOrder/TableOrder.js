import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { NavLink, Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import TableHead from "@mui/material/TableHead";
import ModalForm from "../../modal/ModalForms";
import ModalOrders from "../panelOrder/ModalOrders";

const TittleCells = styled("td")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    width: "5px",
    overFlow: "wrap",
    fontSize: 15,
  },
  [theme.breakpoints.up("md")]: {
    width: 100,
    fontSize: 15,
  },
  [theme.breakpoints.up("lg")]: {
    width: 80,
    fontSize: 20,
    textAlign: "center",
    border: "2px solid #ba6b6c",
  },
}));
const TableCells = styled("td")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    width: "5px",
    padding: 0,
    textAlign: "center",
    fontSize: 15,
    border: "2px solid #ba6b6c",
  },
  [theme.breakpoints.up("md")]: {
    width: 5,
    fontSize: 15,
    border: "2px solid #ba6b6c",
    textAlign: "center",
  },
  [theme.breakpoints.up("lg")]: {
    width: 5,
    fontSize: 20,
    border: "2px solid #ba6b6c",
    textAlign: "center",
  },
}));

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
//--------------------------------------------------------------------------------------------
export default function CustomPaginationActionsTable(props) {
  const { products, orders } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selectedData, setSelectedData] = React.useState();
  //**modal **//
  const [open, setOpen] = React.useState(false);
  const [classname, setClassname] = React.useState("");
  //--------Modal open & close :----------

  const handleShow = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleClick = (input) => {
    setSelectedData(input);
    handleShow();
  };

  const headerTable = [
    "بررسی",
    "  تاریخ سفارش ",
    " قیمت (تومان) ",
    "نام مشتری",
    "شماره ",
  ];

  
  let dollarUSLocale = Intl.NumberFormat('en-US');
  //console.log(products);
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ mx: "auto", mt: 5,fontFamily:"SansWeb" }}>
        <Table sx={{ minWidth: 300 }} aria-label="custom pagination table">
          <TableHead sx={{ borderBottom: 1 }}>
            <TableRow sx={{ backgroundColor: "primary.main", color: "white" }}>
              {headerTable.map((item, key) => (
                <TableCell
                  sx={{
                    backgroundColor: "primary.main",
                    textAlign: "center",
                    color: "white",
                    border: "2px solid white",
                    fontFamily:"SansWeb"
                  }}
                  key={key}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody variant="h3">
            {(rowsPerPage > 0
              ? products.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : products
            ).map((item, index) => {
              let sumPrice = 0;
              let price = 0;
              return (
                <TableRow key={item.id}>
                  <TittleCells>
                    <Button
                      onClick={() => handleClick(item)}
                      sx={{ fontSize: 20, fontFamily: "koodak" }}
                    >
                      بررسی سفارش
                    </Button>
                  </TittleCells>
                  <TableCells>
                    {new Date(item.orderDate).toLocaleDateString("fa-IR")}
                  </TableCells>
                  <TableCells>
                    {item.orderItems?.map((item) => {
                      price = +item.price.replace(",", "").replace(",", "");
                      sumPrice += price;
                      console.log( dollarUSLocale.format(price))
                    })}
                    <div style={{ direction: "rtl" }}> { dollarUSLocale.format(price)} </div>
                  </TableCells>

                  <TableCells>
                    {item.customerDetail.firstName}{" "}
                    {item.customerDetail.lastName}
                  </TableCells>
                  <TableCell
                    sx={{
                      backgroundColor: "primary.main",
                      textAlign: "center",
                      color: "white",
                      border: "2px solid white",
                      width:"5px",
                      fontFamily:"SansWeb"
                    }}
                  >
                    {index + 1}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow >
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={4}
                count={products.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <ModalForm open={open} handleclose={() => handleClose()}>
        <ModalOrders info={selectedData} />
      </ModalForm>
    </>
  );
}
