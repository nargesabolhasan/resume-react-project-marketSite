//   let sortedProducts = [products.map((item=>{return item.name}))]
//   console.log(products)

import React from "react";
import TableQuantity from "./TableQuantity";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if(sortConfig.key==="price"){
            let numFormatA=a[sortConfig.key].replace(',', "").replace(',', '')
            let numFormatB=b[sortConfig.key].replace(',', "").replace(',', '')
            console.log(+numFormatA, +numFormatB)
            if (+numFormatA < +numFormatB) {
                return sortConfig.direction === "ascending" ? -1 : 1;
              }
              if (+numFormatA > +numFormatB) {
                return sortConfig.direction === "ascending" ? 1 : -1;
              }

        }else{
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
        }
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
    <div>
      <button
        type="button"
        onClick={() => requestSort("name")}
        className={getClassNamesFor("name")}
      >
        Name
      </button>
      <button
        type="button"
        onClick={() => requestSort("count")}
        className={getClassNamesFor("count")}
      >
        count
      </button>
      <button
        type="button"
        onClick={() => requestSort("price")}
        className={getClassNamesFor("price")}
      >
        Price
      </button>
      <TableQuantity products={items} />
    </div>
  );
};

export default function App(props) {
  //   let sortedProducts = [products.map((item=>{return item.name}))]
  //   console.log(products)
  const { products } = props;
  return (
    <div >
      <ProductTable products={products} />
    </div>
  );
}
