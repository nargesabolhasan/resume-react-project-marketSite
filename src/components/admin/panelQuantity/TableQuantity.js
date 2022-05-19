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
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { styled } from "@mui/material/styles";
import InputChange from "../panelQuantity/InputChange";
import TableHead from '@mui/material/TableHead';

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
    width: 160,
    fontSize: 20,
    textAlign: "center",
  },
}));
const TableCells = styled("td")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    width: "5px",
    padding: 0,
    textAlign: "center",
    fontSize: 15,
  },
  [theme.breakpoints.up("md")]: {
    width: 5,
    fontSize: 15,
  },
  [theme.breakpoints.up("lg")]: {
    width: 5,
    fontSize: 20,
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

  //---input type:----
  const [readonly,setReadonly]=React.useState(true);

  const [changedCount, setChangedCount] = React.useState();
  const [listOfCuont, setListOfCuont] = React.useState([]);
  const [changedPrice, setChangedPrice] = React.useState();
  const handleSubmit = () => {
    patchData();
  };
  //-----------axios.patch :-----------
  const patchData = () => {
    console.log(changedCount.id);
    // await HttpService.patch("products/",changedCount);
  };

  const clickHandlerCounter = (event) => {
    event.target.disabled = false;
  };

  const changeHandlerCount = (event, textId) => {
    setChangedCount({
      ...changedCount,
      count: event.target.value,
      id: textId,
    });

    listOfCuont?.map(item=>{

      // if(item.id=== changedCount.id && item!==undefined){
      //   console.log("yes")
      // }
       console.log(item)
    })
    setListOfCuont([...listOfCuont, changedCount]);
  };
   //console.log(listOfCuont);

  const changeHandlerPrice = (event, textId) => {
    setReadonly(false)
    setChangedPrice({
      ...changedPrice,
      price: event.target.value,
      id: textId,
    });
  };

 
  const keyDownHandlerCount = (event) => {
    if (event.key === "Enter") {
      event.target.disabled = true;
    }
  };
  const headerTable =[" تعداد موجودی", " قیمت", "نام محصول ", "شماره"]

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
    <TableContainer component={Paper} sx={{ mx: "auto", mt: 5 }}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
      <TableHead sx={{ borderBottom: 1 }}>
     { headerTable.map(item => (
       <TableCells align="right">{item}</TableCells>
     ))}
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
              <TableCells align="right">
                <InputChange
                  inputType="text"
                  value={String(item.count)}
                  changeHandler={(e) => changeHandlerCount(e, item.id)}
                  clickHandler={clickHandlerCounter}
                  keyDownHandler={keyDownHandlerCount}
                  disableInput={false}
                  placeholders={String(item.count)}
                  inputId={String(item.id)}
                />
              </TableCells>
              <TableCells align="right">
                <InputChange
                  inputType="text"
                  value={item.price}
                  changeHandler={(e) => changeHandlerPrice(e, item.id)}
                  clickHandler={clickHandlerCounter}
                  keyDownHandler={keyDownHandlerCount}
                  disableInput={false}
                  placeholders={item.price}
                  inputId={String(item.id)}
                  InputProps={{
                    readOnly: readonly,
                  }}
                />
              </TableCells>

              <TittleCells align="right">{item.name}</TittleCells>
              <TableCells
                align="right"
                sx={{ backgroundColor: "primary.main", textAlign: "center" }}
              >
                {index + 1}
              </TableCells>
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
  );
}
