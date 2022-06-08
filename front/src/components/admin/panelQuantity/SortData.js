import React from "react";
import TableQuantity from "./TableQuantity";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
[theme.breakpoints.down("md")]: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin:"10px 0",
  order:2,
  width:"100%",
},

[theme.breakpoints.up("md")]: {
  display: "flex",
  flexDirection: "row",
  alignItems: "center" ,
  margin:"0px 10px",
  order:1,
  width:"400px",
},
[theme.breakpoints.up("lg")]: {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  margin:"0px 10px",
  order:1,
   width:"400px",
},
  }));

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
        
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <>
    <Div >
      <Div>
      <Button
      sx={{fontSize:15, fontFamily: "koodak"}}
      variant="outlined"
        type="button"
        onClick={() => requestSort("name")}
        className={getClassNamesFor("name")}
      >
        نام محصول 
      </Button>
      <Button
      sx={{fontSize: 15, fontFamily: "koodak"}}
      variant="outlined"
        type="button"
        onClick={() => requestSort("count")}
        className={getClassNamesFor("count")}
      >
        تعداد
      </Button>
      <Button
      sx={{fontSize: 15, fontFamily: "koodak"}}
      variant="outlined"
        type="button"
        onClick={() => requestSort("price")}
        className={getClassNamesFor("price")}
      >
        قیمت
      </Button>
      </Div>
      <Typography sx={{width:"200px",color: 'primary.main', fontFamily: "koodak",order:{lg:2,md:2 ,xs:1}}} >  :مرتب سازی بر اساس </Typography>
      </Div>
      <TableQuantity products={items} />
    </>
  );
};

export default function App(props) {
  const { products } = props;
  return (
    <div >
      <ProductTable products={products} />
    </div>
  );
}
