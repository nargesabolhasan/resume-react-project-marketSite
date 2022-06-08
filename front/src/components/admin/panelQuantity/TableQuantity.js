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
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import EasyEdit from "react-easy-edit";
import { styled } from "@mui/material/styles";
import HttpService from "../../../axios/HttpService";
import TableHead from "@mui/material/TableHead";
import ButtonAdd from "../../buttons/Button-add";
import "./style.scss"

const TittleCells = styled("td")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    width: "5px",
    overFlow: "wrap",
    fontSize: 15,
    border: "2px solid #ba6b6c",
    fontFamily: "SansWeb" 
  },
  
  [theme.breakpoints.up("md")]: {
    width: 100,
    fontSize: 15,
    border: "2px solid #ba6b6c",
    fontFamily: "SansWeb" 
  },
  [theme.breakpoints.up("lg")]: {
    width: 160,
    fontSize: 20,
    textAlign: "start",
    border: "2px solid #ba6b6c",
    fontFamily: "SansWeb" 
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
  },
  [theme.breakpoints.up("lg")]: {
    width: 5,
    fontSize: 20,
    border: "2px solid #ba6b6c",
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
//------------------------------------------------------------------------------------------
export default function CustomPaginationActionsTable(props) {
  const { products, category } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const[changePrice,setChangePrice]= React.useState();
  const[changeCount,setChangeCount]= React.useState();
  const [notTrue,setNotTrue]= React.useState();
  //-----dollarUSLocale:---
  let dollarUSLocale = Intl.NumberFormat('en-US');

  //-----savePrice:----
  const savePrice = async (e, item) => {
    await HttpService.patch(
      `products/${item.id}`,
      { ...item, price: Number(e.replace(",", "").replace(",", "")) },
      { headers: { token: localStorage.getItem("token") } }
    );
  };
  //-----saveCount:----
  const saveCount = async (e, item) => {
    if(e>= 0){
    await HttpService.patch(
      `products/${item.id}`,
      { ...item, count: e },
      { headers: { token: localStorage.getItem("token") } }
    )}else{
      alert("تعداد بزرگتر از 0 باشد")

    }
  };

  const validation=(e)=>{
    if (e>=0){return e}
  }

  const validationPrice =(e)=>{
    if (e>=0){return e}
  }
  //-----saveCount:----
  const cancel = () => {
    //alert("Cancelled");
  };

  const headerTable = [" تعداد موجودی", " قیمت (تومان)", "نام محصول ", "شماره"];

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
      <TableContainer component={Paper} sx={{ mx: "auto", mt: 5 }}>
        <Table sx={{  minWidth:{ lg:500,md:500,xs:250,}  }} aria-label="custom pagination table">
          <TableHead sx={{ borderBottom: 1 }}>
            <TableRow>
              {headerTable.map((item, index) => (
                <TableCell sx={{
                  backgroundColor: "primary.main",
                  color: "white",
                  border: "2px solid white",
                  textAlign: "center",
                  fontFamily: "SansWeb" 
                }} key={index}>
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
            ).map((item, index) => (
              <TableRow key={item.id}>
                <TableCells
                  align="right"
                  sx={{ fontSize: 20, fontFamily: "SansWeb" }}
                >
                  <EasyEdit
                    type="number"
                    onSave={(e) => saveCount(e, item)}
                    onCancel={cancel}
                    saveButtonLabel="ذخیره "
                    cancelButtonLabel="لغو "
                    attributes={{ name: "awesome-input", id: 1 }}
                    value={item?.count}
                    onValidate={validation}
                  />
                </TableCells>
                <TableCells
                  align="right"
                  sx={{ fontSize: 20, fontFamily: "SansWeb" }}
                >
                  <EasyEdit
                    type="text"
                    onSave={(e) => savePrice(e, item)}
                    onCancel={cancel}
                    saveButtonLabel="ذخیره"
                    cancelButtonLabel="لغو"
                    attributes={{ name: "awesome-input", id: 1 }}
                    value={dollarUSLocale.format(item.price)}
                    onValidate={validationPrice}
                   
                  />
                </TableCells>

                <TittleCells align="right" sx={{ direction: "rtl" }}>
                  {item.name}
                </TittleCells>
                <TableCell
                  align="right"
                  sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    fontSize: "20px",
                    border: "2px solid white",
                    textAlign: "center",
                    fontFamily: "SansWeb" ,
                    width:"5px"
                  }}
                >
                  {index + 1}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
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
      {/* <ButtonAdd clickHandler={handleSubmit}> ذخیره</ButtonAdd> */}
    </>
  );
}
