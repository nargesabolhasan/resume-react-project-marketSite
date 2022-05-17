import React from "react";
import useGetAxios from "../../../axios/useGetAxios";
import { BASE_URL } from "../../../constants/Constants";
import PaginationBackend from "../../pagination/Pagination-Backend";
import "./CardStyles.scss";

const CardProduct = () => {
  const { data, loading, error } = useGetAxios("products");
  return (
    <>
    {/* {loading ?<h1>Loading...</h1>:(
        data?.map((product) => (
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src={`${BASE_URL}${product.image}`} />
                  <h3>{product.name}</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>
                   {product.description}
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          ))
    )} */}
    <PaginationBackend/>
    </>
  );
};

export default CardProduct;


// {loading ? (
//   <h1>Loading...</h1>
// ) : (
//   <table>
//   <tbody>
//     {data?.map((record) => (
//       <TableRow key={record.id}>
//         <TableCell>{record.id}</TableCell>
//         <TableCell>{record.name}</TableCell>
//         <TableCell>$ {record.price}</TableCell>
//       </TableRow>
//     ))}
//   </tbody>
// </table>
// )}